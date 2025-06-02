import promisePlugin from 'eslint-plugin-promise';

export default {
    plugins: {
        promise: promisePlugin,
    },
    rules: {
        ...promisePlugin.configs.recommended.rules,
        // extra rules
    },
};
