'use strict';

module.exports = ({
    types
}) => ({
    visitor: {
        ReferencedIdentifier (path) {
            if (path.node.name === '__someOtherDynamicCode') {
                path.replaceWith(types.identifier('__line'));
            }
        }
    }
});
