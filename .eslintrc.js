module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // do not allow console.logs etc...
    'no-console': 0,
    'semi': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'space-before-function-paren': 0,
    'comma-spacing': 0,
  },
  globals: {
    'use': true
  }
}
