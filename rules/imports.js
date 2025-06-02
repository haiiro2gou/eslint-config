/**
 * @fileoverview Import/Export rules
 * This file contains ESLint rules that enforce best practices for import/export statements in JavaScript.
 * These rules help ensure that modules are imported and exported correctly, improving code organization and maintainability.
 * @module rules/imports
 * @type {import('eslint').Linter.Config}
 */

import importPlugin from "eslint-plugin-import";

export default {
    plugins: {
        import: importPlugin,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".mjs", ".js", ".json", ".ts"],
            },


            typescript: {},
        },
        "import/extensions": [".js", ".mjs", ".jsx", "ts", "tsx"],
        "import/core-modules": [],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json|jpg|jpeg|png|webp)$",
        ],


        "import/parsers": {
            espree: [".js", ".mjs", ".jsx", "ts", "tsx"],
        },
    },
    rules: {
        ...importPlugin.configs.recommended.rules,
        ...importPlugin.configs.errors.rules,
        // extra rules
        "import/newline-after-import": "warn",
        "import/no-cycle": "error",
        "import/no-restricted-paths": [
            "error",
            {
                zones: [
                    {
                        from: "./src/!(utils)/**/*",
                        target: "./src/utils/**/*",
                    },
                ],
            },
        ],
        "import/no-useless-path-segments": "error",
    },
};
