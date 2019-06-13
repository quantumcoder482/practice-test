module.exports = {
  env: {
    browser: true,
    serviceworker: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  rules: {
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "react/prop-types": 0
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "react-app",
    "airbnb",
    "standard",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  plugins: [
    "react",
    "flowtype",
    "prettier",
    "standard"
  ]
};