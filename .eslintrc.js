module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
  },
};
