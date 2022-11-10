module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'no-var': 'error',
    'no-param-reassign': 'error',
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': 'error',
    'no-console': 'warn',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'class-methods-use-this': 'off',
    'prefer-const': 'off',
    'no-new': 'off',
    'no-plusplus': 'off',
  },
};
