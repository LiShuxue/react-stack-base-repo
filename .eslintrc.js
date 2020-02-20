module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [{
    files: [
      'config/**/*.js',
      'scripts/**/*.js',
      'server/**/*.js'
    ],
    rules: {
      'strict': 'off'
    }
  }]
};
