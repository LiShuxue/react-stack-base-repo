module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react-hooks/exhaustive-deps': 'off'
  },
  overrides: [
    {
      files: ['config/**/*.js', 'scripts/**/*.js'],
      rules: {
        strict: 'off'
      }
    }
  ]
};
