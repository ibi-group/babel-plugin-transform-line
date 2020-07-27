'use strict';

const _chai = require('chai'),
    _mocha = require('mocha');

_mocha.describe('__line', () => {
    _mocha.it('should represent the current line number', () => {
        _chai.expect(__line).to.equal(8);
    });

    _mocha.it('should be undefined when it doesn\'t exist in the original source', () => {
        /* global __someOtherDynamicCode
        --
        This is explicitly testing an indentifier which doesn't really exist.
        */
        _chai.expect(__someOtherDynamicCode).to.be.undefined;
    });
});
