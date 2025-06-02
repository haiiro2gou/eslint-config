/**
 * @fileoverview ESLint configuration for React Hooks rules
 * This configuration includes rules that enforce best practices for React Hooks usage.
 * These rules help ensure that Hooks are used correctly and consistently in React applications.
 * @module rules/react-hooks
 * @type {import('eslint').Linter.Config}
 * @see https://reactjs.org/docs/hooks-rules.html
 */

import reactHooks from "eslint-plugin-react-hooks";

export default {
    plugins: {
        "react-hooks": reactHooks,
    },
    rules: {
        "react-hooks/exhaustive-deps": ["error"],
        "react-hooks/rules-of-hooks": ["error"],
    },
};
