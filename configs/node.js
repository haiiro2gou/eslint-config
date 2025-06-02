/**
 * ESLint configuration for Node.js specific rules.
 * This configuration includes rules that are specific to Node.js environments,
 * such as handling of global variables, module imports, and other Node.js features.
 *
 * @module configs/node
 * @type {import('eslint').Linter.Config[]}
 */

import nodeRuleSet from "../rules/node.js";

export default [nodeRuleSet];
