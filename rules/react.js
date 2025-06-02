/**
 * @fileoverview ESLint configuration for React rules
 * This configuration includes rules that enforce best practices for React development.
 * It is based on the recommended rules from the eslint-plugin-react package.
 * @module rules/react
 * @type {import('eslint').Linter.Config}
 */

import react from 'eslint-plugin-react';

export default {
  plugins: {
    react,
  },
  languageOptions: {
    ...react.configs.recommended.languageOptions,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    // extra rules
  },
};
