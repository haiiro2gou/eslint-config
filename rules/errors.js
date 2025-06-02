/**
 * @fileoverview Error Handling rules
 * This file contains ESLint rules that enforce error handling practices in JavaScript code.
 * These rules help ensure that errors are handled appropriately and consistently.
 * @module rules/errors
 * @type {import('eslint').Linter.Config}
 */

export default {
    rules: {
        "no-fallthrough": "error",
        "no-implicit-globals": "error",
        "switch-colon-spacing": ["error", { "before": false, "after": true }],
    },
};
