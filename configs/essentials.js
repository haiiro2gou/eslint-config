import bestPracticesRuleSet from "../rules/best-practices.js";
import errorsRuleSet from "../rules/errors.js";
import es6RuleSet from "../rules/es6.js";
import styleRuleSet from "../rules/style.js";
import variablesRuleSet from "../rules/variables.js";
import importsRuleSet from "../rules/imports.js";
import promiseRuleSet from "../rules/promise.js";
/**
 * ESLint configuration for essential rules.
 * This configuration includes best practices, error handling, ES6 features,
 * style guidelines, variable declarations, import/export rules, and promise handling.
 * It is designed to enforce a consistent coding style and catch common errors.
 *
 * @module configs/essentials
 */
/**
 * ESLint configuration for essential rules.
 * This configuration includes best practices, error handling, ES6 features,
 * style guidelines, variable declarations, import/export rules, and promise handling.
 * It is designed to enforce a consistent coding style and catch common errors.
 * @type {import('eslint').Linter.Config[]}
 */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved, import/extensions

export default [
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2023,
                sourceType: "module",
            },
        },
    },
    bestPracticesRuleSet,
    errorsRuleSet,
    es6RuleSet,
    styleRuleSet,
    variablesRuleSet,
    importsRuleSet,
    promiseRuleSet,
];
