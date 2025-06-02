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
import importPlugin from "eslint-plugin-import";

export default {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        import: importPlugin,
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
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
                disallowTypeAnnotations: true,
            },
        ],
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/require-array-sort-compare": [
            "error",
            {
                ignoreStringArrays: true,
            },
        ],
        "@typescript-eslint/restrict-plus-operands": [
            "error",
            {
                checkCompoundAssignments: true,
                allowBoolean: false,
                allowNullish: false,
                allowNumberAndString: false,
                allowRegExp: false,
                allowAny: false,
            },
        ],
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                allowNumber: true,
                allowBoolean: true,
                allowNullable: false,
                allowAny: false,
                allowNever: false,
                allowNullish: false,
                allowRegExp: false,
            },
        ],
        "@typescript-eslint/strict-boolean-expressions": [
            "warn",
            {
                allowString: false,
                allowNumber: false,
                allowNullableObject: false,
            },
        ],
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "import/consistent-type-specifier-style": ["error", "prefer-inline"],
        "no-restricted-syntax": [
            "warn",
            {

                selector:
                    "VariableDeclarator[init.type='TSAsExpression'][init.typeAnnotation.typeName.name!='const']",
                message: "Don't use `as`.",
            },
        ],
    },
};
