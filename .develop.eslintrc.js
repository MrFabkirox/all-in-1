module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  'extends': 'eslint:recommended',
  rules: {
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-callback-return': 'error',
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    camelcase: 'warn',
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'error',
    curly: [
      'error'
    ],
    'default-case': 'error',
    eqeqeq: [
      'error',
      'smart'
    ],
    'func-names': [
      'error',
      'as-needed'
    ],
    'function-paren-newline': [
      'error',
      {
        minItems: 3
      }
    ],
    'global-require': 'error',
    indent: ['error', 2],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'max-len': [
      'error',
      {
        code: 120
      }
    ],
    'new-cap': 'error',
    'no-case-declarations': 'error',
    'no-console': 'warn',
    'no-extend-native': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0
      }
    ],
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-return-assign': [
      'error',
      'always'
    ],
    'no-tabs': 'error',
    'no-underscore-dangle': 'warn',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true
      }
    ],
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 1
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
          consistent: false,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 1,
        },
      },
    ],
    'object-curly-spacing': [
      'error',
      'never'
    ],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false
      }
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
        avoidExplicitReturnArrows: true
      }
    ],
    'one-var': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': [
      'error',
      'never'
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true
      }
    ],
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    quotes: [
      'error',
      'single'
    ],
    radix: 'error',
    semi: [
      'error',
      'always'
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'semi-style': [
      'error',
      'last'
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: true
      }
    ],
    'spaced-comment': 'error',
    strict: [
      'error',
      'never'
    ],
    'switch-colon-spacing': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
}
