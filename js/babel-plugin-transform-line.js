'use strict';

module.exports = ({
    types
}) => {
    const void0Expression = types.unaryExpression('void', types.numericLiteral(0), true);

    return {
        visitor: {
            ReferencedIdentifier (path) {
                if (path.node.name === '__line') {
                    const location = path.node.loc;

                    path.replaceWith(
                        location && location.start.line ?
                            types.numericLiteral(location.start.line) :
                            void0Expression
                    );
                }
            }
        }
    };
};
