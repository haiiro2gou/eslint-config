/**
 * @fileoverview Node.js rules
 * This file contains ESLint rules that enforce best practices for Node.js development.
 * These rules help ensure that Node.js code is written in a consistent and error-free manner.
 * @module rules/node
 * @type {import('eslint').Linter.Config}
 */

import n from "eslint-plugin-n";

export default {
    plugins: {
        n,
    },
    rules: {
        ...n.configs["flat/recommended"].rules,
        // extra rules
    },
};
