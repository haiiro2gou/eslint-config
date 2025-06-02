/**
 * @fileoverview ES6 rules
 * This file contains ESLint rules that enforce ES6 (ECMAScript 2015) features and practices.
 * These rules help ensure that modern JavaScript features are used correctly and consistently.
 * @module rules/es6
 * @type {import('eslint').Linter.Config}
 */

export default {
    rules: {
        "arrow-body-style": ["warn", "as-needed"],
        "arrow-parens": ["warn", "as-needed"],
        "no-var": "error",
        "prefer-const": "error",
        "prefer-spread": "warn",
    },
};
