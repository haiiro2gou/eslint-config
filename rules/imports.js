/**
 * @fileoverview Import/Export rules
 * This file contains ESLint rules that enforce best practices for import/export statements in JavaScript.
 * These rules help ensure that modules are imported and exported correctly, improving code organization and maintainability.
 * @module rules/imports
 * @type {import('eslint').Linter.Config}
 */

import importPlugin from "eslint-plugin-import-x";

const renameImportX = (rules) => Object.fromEntries(
    Object.entries(rules).map(([name, value]) => [name.replace(/^import-x\//u, "import/"), value]),
);

export default {
    plugins: {
        import: importPlugin,
    },
    settings: {
        "import-x/resolver": {
            node: {
                extensions: [".mjs", ".js", ".json", ".ts"],
            },


            typescript: {},
        },
        "import-x/extensions": [".js", ".mjs", ".jsx", "ts", "tsx"],
        "import-x/core-modules": [],
        "import-x/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json|jpg|jpeg|png|webp)$",
        ],


        "import-x/parsers": {
            espree: [".js", ".mjs", ".jsx", "ts", "tsx"],
        },
    },
    rules: {
        // import-x presets use the "import-x/" prefix; keep the existing "import/" rule names
        ...renameImportX(importPlugin.flatConfigs.recommended.rules),
        ...renameImportX(importPlugin.flatConfigs.errors.rules),
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
        "no-duplicate-imports": "warn",
    },
};
