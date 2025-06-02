import typescriptEslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default {
    plugins: {
        "@typescript-eslint": typescriptEslint,
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
    },
};
