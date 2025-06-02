/**
 * @fileoverview Best Practices rules
 * This file contains ESLint rules that enforce best practices in JavaScript code.
 * These rules help maintain code quality, readability, and consistency.
 * @module rules/best-practices
 * @type {import('eslint').Linter.Config}
 */
import preferArrowFunctionsPlugin from "eslint-plugin-prefer-arrow-functions";
import unicornPlugin from "eslint-plugin-unicorn";

export default {
    plugins: {
        "prefer-arrow-functions": preferArrowFunctionsPlugin,
        unicorn: unicornPlugin,
    },
    rules: {
        "curly": [
            "warn",
            "multi-or-nest",
            "consistent",
        ],
        "eqeqeq": "warn",
        "no-case-declarations": "off",
        "no-empty-function": "warn",
        "no-floating-decimal": "warn",
        "no-implicit-coercion": "error",
        "no-implied-eval": "error",
        "no-multi-spaces": "warn",
        "no-nested-ternary": "warn",
        "no-restricted-globals": [
            "warn",
            "eval",
            "Boolean",
            "Function",
            "globalThis",
            { "name": "isFinite", "message": "Use Number.isFinite instead." },
            { "name": "isNaN", "message": "Use Number.isNaN instead." },
        ],
        "no-unneeded-ternary": "warn",
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
        "yoda": [
            "warn",
            "never",
            {
                "exceptRange": true
            }
        ],
    },
};
