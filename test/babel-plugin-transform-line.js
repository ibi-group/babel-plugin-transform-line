import {
    describe,
    it
} from 'mocha';

import {
    expect
} from 'chai';

describe('__line', () => {
    it('should represent the current line number', () => {
        expect(__line).to.equal(12);
    });

    it('should be undefined when it doesn\'t exist in the original source', () => {
        /* global __someOtherDynamicCode */
        expect(__someOtherDynamicCode).to.be.undefined;
    });
});
