import importPlugin from "eslint-plugin-import";

export default {
    plugins: {
        import: importPlugin,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json', '.ts'],
            },
            // Resolve the problem of incorrect recognition of alias paths by TypeScript compiler options.
            // https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-535351922
            typescript: {},
        },
        'import/extensions': ['.js', '.mjs', '.jsx', 'ts', 'tsx'],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json|jpg|jpeg|png|webp)$',
        ],
        // TODO: Remove this once eslint-plugin-import supports Flat Config completely.
        // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
        'import/parsers': {
            espree: ['.js', '.mjs', '.jsx', 'ts', 'tsx'],
        },
    },
    rules: {
        ...importPlugin.configs.recommended.rules,
        ...importPlugin.configs.errors.rules,
        // extra rules
    },
};
