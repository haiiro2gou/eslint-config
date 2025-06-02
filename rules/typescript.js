/**
 * @fileoverview ESLint configuration for TypeScript
 * This file contains ESLint rules specifically for TypeScript code.
 * These rules help ensure that TypeScript code is type-checked and follows best practices.
 * @module rules/typescript
 * @type {import('eslint').Linter.Config}
 * @see https://typescript-eslint.io/rules/
 */

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
        parser,
        parserOptions: {
            project: true,
        },
    },
    rules: {
        ...typescriptEslint.configs["eslint-recommended"].overrides[0].rules,
        ...typescriptEslint.configs["strict-type-checked"].rules,
        ...typescriptEslint.configs["stylistic-type-checked"].rules,
        // extra rules
    },
};
