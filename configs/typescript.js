import typescriptRuleSet from "../rules/typescript.js";
/**
 * ESLint configuration for TypeScript specific rules.
 * This configuration includes rules that are specific to TypeScript environments,
 * such as type checking, stylistic preferences, and other TypeScript features.
 *
 * @module configs/typescript
 */
/**
 * ESLint configuration for TypeScript specific rules.
 * This configuration includes rules that are specific to TypeScript environments,
 * such as type checking, stylistic preferences, and other TypeScript features.
 * @type {import('eslint').Linter.Config[]}
 */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved, import/extensions

export default [
    {
        files: ["**/*.@(ts|tsx|cts|mts)"],
        ...typescriptRuleSet,
    },
];
