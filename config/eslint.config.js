module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true
  },
  extends: [
    // http://eslint.org/docs/rules/
    'eslint:recommended',
    // https://github.com/yannickcr/eslint-plugin-react
    'plugin:react/recommended'
  ],
  globals: {
    API_URL: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      'ecmaVersion': 7,
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    sourceType: 'module'
  },
  plugins: [
    // https://github.com/yannickcr/eslint-plugin-react
    'react',
    // https://github.com/benmosher/eslint-plugin-import
    'import',
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    'jsx-a11y'
  ],
  // 'off' or 0 - turn the rule off
  // 'warn' or 1 - turn the rule on as a warning (doesn’t affect exit code)
  // 'error' or 2 - turn the rule on as an error (exit code will be 1)
  rules: {
    // Best Practices
    'block-scoped-var': 2,
    'complexity': [2, {'max': 10}],
    'consistent-return': 2,
    'curly': 2,
    'dot-location': [2, 'property'],
    'dot-notation': [2, {'allowPattern': '^[a-z]+(_[a-z]+)+$'}],
    'eqeqeq': 2,
    'no-alert': 2,
    'no-multi-spaces': 2,
    'no-param-reassign': [2, {'props': true}],
    'no-redeclare': 2,
    'no-unused-expressions': [2, {'allowShortCircuit': true, 'allowTernary': true}],
    'vars-on-top': 2,
    'yoda': [2, 'never', {'exceptRange': true}],
    'no-console': 1, //For debugging, but throw warnings so logs are not commited.

    // // Stylistic Issues
    // 'arrow-body-style': 2,
    // 'array-bracket-spacing': [2, 'never'],
    // 'arrow-parens': [2, 'as-needed'],
    // 'arrow-spacing': 2,
    // 'block-spacing': [2, 'always'],
    // 'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    // 'camelcase': 2,
    // 'comma-spacing': [2, {'before': false, 'after': true}],
    // 'comma-style': [2, 'last'],
    // 'computed-property-spacing': [2, 'never'],
    // 'indent': [2, 2, {'MemberExpression': 1, 'SwitchCase': 1}],
    // 'jsx-quotes': [2, 'prefer-double'],
    // 'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    // 'keyword-spacing': [2, {'before': true, 'after': true}],
    // 'linebreak-style': 0,
    // 'newline-after-var': 2,
    // 'no-constant-condition': 2,
    // 'no-dupe-class-members': 2,
    // 'no-lonely-if': 2,
    // 'no-multiple-empty-lines': 2,
    // 'no-underscore-dangle': 2,
    // 'no-var': 2,
    // 'object-curly-spacing': [2, 'always'],
    // 'object-shorthand': [2, 'always'],
    // 'operator-linebreak': [2, 'after'],
    // 'padded-blocks': [2, 'never'],
    // 'prefer-arrow-callback': 2,
    // 'prefer-const': 2,
    // 'prefer-spread': 2,
    // 'prefer-template': 2,
    // 'quote-props': [2, 'as-needed'],
    // 'quotes': [2, 'single', 'avoid-escape'],
    // 'semi-spacing': [2, {'before': false, 'after': true}],
    // 'space-before-blocks': 2,
    // 'space-before-function-paren': [2, 'never'],
    // 'space-in-parens': 2,
    // 'space-infix-ops': 2,
    // //'semi': [2, 'never'],

    // // Strict Move
    // 'strict': 0,

    // // Variables
    // 'no-shadow': 2,

    // // React
    // 'react/no-did-mount-set-state': 2,
    // 'react/no-did-update-set-state': 2,
    // 'react/no-multi-comp': 2,
     'react/prefer-es6-class': 2,
     'react/prefer-stateless-function': 2,
     'react/self-closing-comp': 2,
    // 'react/sort-comp': 2,
    // 'react/sort-prop-types': 2,

    // // JSX
    // 'react/jsx-closing-bracket-location': 2,
    // 'react/jsx-closing-tag-location': 2,
    // 'react/jsx-curly-spacing': 2,
    // 'react/jsx-handler-names': 2,
    // 'react/jsx-indent': [2, 2],
    // 'react/jsx-indent-props': [2, 2],
    // 'react/jsx-no-bind': [2, {'ignoreRefs': true}],
    // 'react/jsx-pascal-case': 2,
    // 'react/jsx-filename-extension': 2,
    // 'react/jsx-sort-props': 2,
    // 'react/jsx-tag-spacing': 2,
    // 'react/jsx-wrap-multilines': 2,

    // // JSX Ally
    // 'jsx-a11y/alt-text': 2,
    // 'jsx-a11y/img-redundant-alt': 2
  },
  settings: {
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack
    'import/resolver': 'webpack'
  }
};
