/* global describe, it -- mocha's bdd interface is global */

'use strict';

const _chai = require('chai');

describe('__line', () => {
    it('should represent the current line number', () => {
        _chai.expect(__line).to.equal(9);
    });

    it('should be undefined when it doesn\'t exist in the original source', () => {
        /* global __someOtherDynamicCode
        --
        This is explicitly testing an indentifier which doesn't really exist.
        */
        _chai.expect(__someOtherDynamicCode).to.be.undefined;
    });
});
