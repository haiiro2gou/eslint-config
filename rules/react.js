/**
 * @fileoverview ESLint configuration for React rules
 * This configuration includes rules that enforce best practices for React development.
 * It is based on the recommended rules from the eslint-plugin-react package.
 * @module rules/react
 * @type {import('eslint').Linter.Config}
 */

import react from "eslint-plugin-react";

export default {
    plugins: {
        react,
    },
    languageOptions: {
        ...react.configs.recommended.languageOptions,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        ...react.configs.recommended.rules,
        // extra rules
        "no-restricted-syntax": [
            "error",

            {
                selector:
                    "ImportDeclaration[source.value='react'][specifiers.0.type!='ImportNamespaceSpecifier']",
                message:
                    "React should be imported as `import * as React from 'react'.",
            },
            {

                selector:
                    "CallExpression[callee.object.type='Identifier'][callee.object.name='React'][callee.type='MemberExpression'][callee.property.type='Identifier'][callee.property.name='useEffect'][arguments.length!=2]",
                message: "The second argument to useEffect is required.",
            },
        ],
        "react/jsx-no-bind": "error",
        "react/jsx-no-leaked-render": [
            "error",
            {
                validStrategies: ["ternary"],
            },
        ],
    },
};
