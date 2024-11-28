const { parserOptions } = require("eslint-plugin-import/config/react");
const { default: sourceType } = require("eslint-plugin-import/lib/core/sourceType");
const extensions = require("eslint-plugin-import/lib/rules/extensions");
const { version } = require("typescript");

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['simple-import-sort', 'prettier'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true}],
    },
};