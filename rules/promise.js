/**
 * @fileoverview Promise rules
 * This file contains ESLint rules that enforce best practices for handling promises in JavaScript.
 * These rules help ensure that promises are used correctly, improving code reliability and readability.
 * @module rules/promise
 * @type {import('eslint').Linter.Config}
 */

import promisePlugin from 'eslint-plugin-promise';

export default {
    plugins: {
        promise: promisePlugin,
    },
    rules: {
        ...promisePlugin.configs.recommended.rules,
        // extra rules
    },
};
