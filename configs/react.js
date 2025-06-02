/**
 * ESLint configuration for React specific rules.
 * This configuration includes rules that are specific to React environments,
 * such as JSX handling, React hooks, and other React features.
 *
 * @module configs/react
 * @type {import('eslint').Linter.Config[]}
 */

import jsxA11yRuleSet from '../rules/jsx-a11y.js';
import reactHooksRuleSet from '../rules/react-hooks.js';
import reactRuleSet from '../rules/react.js';

export default [
  reactRuleSet,
  reactHooksRuleSet,
  jsxA11yRuleSet,
];
