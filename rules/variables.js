/**
 * @fileoverview Variables rules
 * This file contains ESLint rules that enforce variable declaration and usage practices in JavaScript code.
 * These rules help ensure that variables are declared and used consistently, improving code quality and maintainability.
 * @module rules/variables
 * @type {import('eslint').Linter.Config}
 */
import functionalPlugin from "eslint-plugin-functional";

export default {
    plugins: {
        functional: functionalPlugin,
    },
    rules: {
        "functional/immutable-data": [
            "error",
            {
                ignoreClasses: true,
                ignoreImmediateMutation: true,
                ignoreIdentifierPattern: [
                    "^draft",
                    "^mut_",
                    "^_mut_",
                    "^#mut_",
                    "window.location.href",
                ],
                ignoreAccessorPattern: [
                    "**.current.**",
                    "**.displayName",
                    "**.scrollTop",
                ],
            },
        ],
        "functional/no-let": [
            "error",
            {
                allowInForLoopInit: true,
                allowInFunctions: false,
                ignoreIdentifierPattern: ["^mut_", "^_mut_", "^#mut_"],
            },
        ]
    },
};
