'use strict';

const _normalizePathSep = function (path) {
    return path.replace(/\\/gu, '/');
};

module.exports = ({
    types
}) => {
    const void0Expression = types.unaryExpression('void', types.numericLiteral(0), true);

    return {
        visitor: {
            ReferencedIdentifier (path, state) {
                if (path.node.name === '__line') {
                    const location = path.node.loc;

                    path.replaceWith(
                        location && location.start.line ?
                            types.numericLiteral(location.start.line) :
                            void0Expression
                    );
                } else if (path.node.name === '__fileline') {
                    const filename = _normalizePathSep(state.file.opts.filename),
                        location = path.node.loc,
                        root = _normalizePathSep(state.file.opts.root);

                    let sourceString = filename.substring(root.length);

                    if (location && location.start.line) {
                        sourceString += `:${location.start.line}`;
                    }

                    path.replaceWith(types.stringLiteral(sourceString));
                }
            }
        }
    };
};
