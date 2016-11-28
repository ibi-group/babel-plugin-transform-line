export default ({
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
