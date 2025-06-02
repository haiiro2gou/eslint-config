/**
 * ESLint configuration for TypeScript specific rules.
 * This configuration includes rules that are specific to TypeScript environments,
 * such as type checking, stylistic preferences, and other TypeScript features.
 *
 * @module configs/typescript
 * @type {import('eslint').Linter.Config[]}
 */

import typescriptRuleSet from "../rules/typescript.js";

export default [
    {
        files: ["**/*.@(ts|tsx|cts|mts)"],
        ...typescriptRuleSet,
    },
];
