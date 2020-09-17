module.exports = {
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest'],
};
