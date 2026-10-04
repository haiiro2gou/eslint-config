/**
 * @fileoverview ESLint configuration for React rules
 * This configuration includes rules that enforce best practices for React development.
 * It is based on the recommended rules from the @eslint-react/eslint-plugin package.
 * @module rules/react
 * @type {import('eslint').Linter.Config}
 */

import eslintReact from "@eslint-react/eslint-plugin";

export default {
    plugins: {
        ...eslintReact.configs.recommended.plugins,
    },
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    settings: {
        ...eslintReact.configs.recommended.settings,
    },
    rules: {
        ...eslintReact.configs.recommended.rules,
        // covered by eslint-plugin-react-hooks (rules/react-hooks.js)
        "@eslint-react/exhaustive-deps": "off",
        "@eslint-react/rules-of-hooks": "off",
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
    },
};
