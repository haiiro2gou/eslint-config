/**
 * @fileoverview Best Practices rules
 * This file contains ESLint rules that enforce best practices in JavaScript code.
 * These rules help maintain code quality, readability, and consistency.
 * @module rules/best-practices
 * @type {import('eslint').Linter.Config}
 */

import unicornPlugin from "eslint-plugin-unicorn";

export default {
    plugins: {
        unicorn: unicornPlugin,
    },
    rules: {
        "no-implicit-coercion": "error",
        "no-implied-eval": "error",
        "no-restricted-globals": [
            "eval",
            "Boolean",
            "Function",
            "globalThis",
            { "name": "isFinite", "message": "Use Number.isFinite instead." },
            { "name": "isNaN", "message": "Use Number.isNaN instead." },
        ],
        "prefer-arrow-functions/prefer-arrow-functions": [
            "error",
            {
                classPropertiesAllowed: false,
                disallowPrototype: false,
                returnStyle: "unchanged",
                singleReturnOnly: false,
            },
        ],
        "prefer-template": "error",
        "unicorn/prefer-switch": "error",
    },
};
