# babel-plugin-transform-line

[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-line.svg)](https://www.npmjs.com/package/babel-plugin-transform-line)
[![License](https://img.shields.io/npm/l/babel-plugin-transform-line.svg)](https://github.com/ibi-group/babel-plugin-transform-line/blob/main/LICENSE)
![](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

A simple Babel plugin that replaces the identifier `__line` with the source line number.

## Why Use This?

- **Debugging**: Easily track which line of code is executing
- **Logging**: Add line numbers to log messages automatically
- **Error Reporting**: Include source line information in error messages
- **Zero Runtime Overhead**: Line numbers are replaced at build time, not runtime
- **Minimal Setup**: Simple to add to your existing Babel configuration

## Installation

```bash
npm install --save-dev babel-plugin-transform-line
```

## Usage

### Add to your Babel configuration

```javascript
// In your .babelrc or babel.config.js
{
    "plugins": [
        "babel-plugin-transform-line"
    ]
}
```

### In your code

```javascript
// Your source code
console.log(`Error occurred on line ${__line}`);

// After transformation
console.log(`Error occurred on line ${12}`); // Where 12 is the actual line number
```

## Examples

### Simple Usage with Log Statements

```javascript
const _processData = data => {
    if (!data) {
        console.error(`[Line ${__line}] Invalid data provided`); // [Line 3] Invalid data provided

        return null;
    }

    // Process data
    console.log(`[Line ${__line}] Processing completed`); // [Line 9] Processing completed

    return data;
};
```

### Enhanced Error Objects

```javascript
import _Error from 'isotropic-error';

try {
    // Some code that might fail
    throw _Error({
        details: {
            line: __line
        },
        message: 'Encountered an error'
    });
} catch (error) {
    console.error(error.details.line); // 7
}
```

## How It Works

This plugin uses Babel's AST visitor pattern to find every occurrence of the `__line` identifier in your code. When found, it replaces it with a numeric literal representing the source line number where `__line` appears.

If line information isn't available (which is rare and usually only happens in programmatically generated ASTs), the plugin replaces `__line` with `void 0` (undefined).

## Notes

- The plugin only transforms references to the exact identifier `__line`. Variables with similar names are not affected.
- Line numbers refer to the original source code, not the transformed output.
- This plugin is most helpful during development and debugging. Consider removing it in production builds if line numbers aren't needed.

## Use Cases

- **Debugging**: Quickly identify which line of code is executing
- **Logging**: Add contextual information to log messages
- **Error Reporting**: Create more informative error messages
- **Testing**: Reference line numbers in test output for easier debugging
- **Documentation**: Auto-generate code examples with line numbers

## Integration with Other Tools

### With Isotropic Logger

```javascript
import _logger from 'isotropic-logger';

// Usage - use __line at the call site
const _processUser = user => {
    _logger.info({
        line: __line,
        user
    }, 'Processing user');

    if (!user.id) {
        _logger.error({
            line: __line
        }, 'User missing id');

        return false;
    }

  return true;
};
```

### With Mocha and Chai

```javascript
import _chai from 'isotropic-dev-dependencies/lib/chai.js';
import _mocha from 'isotropic-dev-dependencies/lib/mocha.js';

// Don't actually use this validation function for real
const _validateEmail = email => email !== null && email !== '';

_mocha.describe('Data validation', () => {
    _mocha.it('should validate email addresses', () => {
        const email = 'test@example.com',
            result = _validateEmail(email);

        // Include line number in assertion message
        _chai.expect(result, `Email validation failed on line ${__line}`).to.be.true;
    });

    _mocha.it('should handle invalid inputs properly', () => {
        const badInput = null;

        // Easy to see which test assertion failed
        _chai.expect(_validateEmail(badInput), `Null validation failed on line ${__line}`).to.be.false;
        _chai.expect(_validateEmail(''), `Empty string validation failed on line ${__line}`).to.be.false;
    });
});
```

## Important Usage Notes

Remember that `__line` is replaced with the literal line number where it appears:

```javascript
// INCORRECT USAGE - You usually don't want to do this!
const LINE = __line; // This becomes const LINE = 2;

// Later in your code
console.log(`This is line ${LINE}`); // Will always print "This is line 2"

// CORRECT USAGE - Use __line directly where you need the line number
console.log(`This is line ${__line}`); // Will print the current line number
```

## Contributing

Please refer to [CONTRIBUTING.md](https://github.com/ibi-group/babel-plugin-transform-line/blob/main/CONTRIBUTING.md) for contribution guidelines.

## Issues

If you encounter any issues, please file them at https://github.com/ibi-group/babel-plugin-transform-line/issues
