module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'indentation': 4,
    'comment-empty-line-before': null,
    'color-hex-length': 'short',
    'max-nesting-depth': 3,
    'no-eol-whitespace': [true, {
      'ignore': ['empty-lines']
    }],
    'order/properties-alphabetical-order': true,
    'selector-list-comma-newline-after': 'always-multi-line',
    'string-quotes': 'single'
  }
};
