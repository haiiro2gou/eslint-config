import nodeRuleSet from "../rules/node.js";
/**
 * ESLint configuration for Node.js specific rules.
 * This configuration includes rules that are specific to Node.js environments,
 * such as handling of global variables, module imports, and other Node.js features.
 *
 * @module configs/node
 */
/**
 * ESLint configuration for Node.js specific rules.
 * This configuration includes rules that are specific to Node.js environments,
 * such as handling of global variables, module imports, and other Node.js features.
 * @type {import('eslint').Linter.Config[]}
 */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved, import/extensions

export default [nodeRuleSet];
