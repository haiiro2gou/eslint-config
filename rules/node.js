import n from "eslint-plugin-n";

export default {
    plugins: {
        n,
    },
    rules: {
        ...n.configs["flat/recommended"].rules,
        // extra rules
    },
};
