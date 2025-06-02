/**
 * @fileoverview Style rules
 * This file contains ESLint rules that enforce consistent style in JavaScript code.
 * These rules help maintain a uniform coding style, improving readability and maintainability.
 * @module rules/style
 * @type {import('eslint').Linter.Config}
 */

export default {
    rules: {
        "array-bracket-newline": ["warn", "consistent"],
        "array-bracket-spacing": "warn",
        "arrow-body-style": ["warn", "as-needed"],
        "brace-style": ["warn", "1tbs"],
        "comma-spacing": ["warn", { before: false, after: true }],
        "func-style": "warn",
        "max-depth": ["warn", 4],
        "quotes": ["warn", "double", { avoidEscape: true }],
        "space-before-function-paren": [
            "warn",
            { anonymous: "ignore", named: "never", asyncArrow: "always" },
        ],
        "space-in-parens": ["warn", "never"],
        "space-unary-ops": [
            "warn",
            {
                words: true,
                nonwords: false,
            },
        ],
        "spaced-comment": ["warn", "always"],
        "template-curly-spacing": ["warn", "never"],
    },
};
