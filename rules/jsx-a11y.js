/**
 * @fileoverview ESLint configuration for JSX accessibility rules
 * This file contains ESLint rules specifically for JSX accessibility.
 * These rules help ensure that JSX elements are accessible and follow best practices for web accessibility.
 * @module rules/jsx-a11y
 * @type {import('eslint').Linter.Config}
 */

import jsxA11y from "eslint-plugin-jsx-a11y";

export default {
    plugins: {
        "jsx-a11y": jsxA11y,
    },
    rules: {
        ...jsxA11y.configs.recommended.rules,
        // extra rules
    },
};
