module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['serviceWorker.js'],
    },
  ],
};
