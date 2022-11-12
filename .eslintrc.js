module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "2022",
  },
  rules: {
    indent: ["error", 2],
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 15],
  },
  overrides: [
    {
      files: "__tests__/*",
      env: {
        jest: true,
      },
      rules: {
        "max-lines-per-function": ["error", 100],
      },
    },
  ],
};
