const { defineConfig } = require('eslint/config');
const { fixupConfigRules } = require('@eslint/compat');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
      ),
    ),

    rules: {
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
        },
      ],

      'arrow-body-style': 'off',
      'arrow-parens': ['error', 'always'],
      'block-scoped-var': 'error',
      camelcase: 'off',
      'class-methods-use-this': 'off',

      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'ignore',
        },
      ],

      'consistent-return': 'error',

      'default-case': [
        'error',
        {
          commentPattern: '^no default$',
        },
      ],

      'default-case-last': 'error',
      'default-param-last': 'error',

      'dot-notation': [
        'error',
        {
          allowKeywords: true,
        },
      ],

      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore',
        },
      ],

      'function-paren-newline': 'off',
      'func-names': 'warn',
      'global-require': 'error',
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',

      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false,
        },
      ],

      'no-unused-expressions': ['error'],
      'import/no-unresolved': ['error'],
      'import/named': ['error'],
      'import/default': ['error'],
      'import/namespace': ['error'],
      'import/export': ['error'],
      'import/no-named-as-default': ['error'],
      'import/no-named-as-default-member': ['error'],
      'import/no-mutable-exports': ['error'],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: false,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],

      'import/imports-first': ['error'],
      'import/no-duplicates': ['error'],
      'import/extensions': ['error', 'never'],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
          ],
          'newlines-between': 'always',
        },
      ],

      'import/prefer-default-export': ['off'],
      'import/newline-after-import': ['error'],
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error',

      'jest/valid-title': [
        'error',
        {
          ignoreTypeOfDescribeName: true,
        },
      ],

      'lines-around-directive': [
        'error',
        {
          before: 'always',
          after: 'always',
        },
      ],

      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: false,
        },
      ],

      'max-classes-per-file': ['error', 1],

      'new-cap': [
        'error',
        {
          newIsCap: true,
          newIsCapExceptions: [],
          capIsNew: false,
          capIsNewExceptions: [
            'Immutable.Map',
            'Immutable.Set',
            'Immutable.List',
          ],
        },
      ],

      'no-array-constructor': 'error',
      'no-await-in-loop': 'off',
      'no-bitwise': 'error',
      'no-buffer-constructor': 'error',
      'no-caller': 'error',
      'no-console': 'error',
      'no-constructor-return': 'error',
      'no-continue': 'error',
      'no-duplicate-imports': 'off',

      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],

      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',

      'no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods'],
        },
      ],

      'no-implied-eval': 'error',
      'no-iterator': 'error',

      'no-labels': [
        'error',
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],

      'no-label-var': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': ['error'],
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-require': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',

      'no-param-reassign': [
        'error',
        {
          props: true,

          ignorePropertyModificationsFor: [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
          ],
        },
      ],

      'no-path-concat': 'error',
      'no-plusplus': 'off',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',

      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: ['default', 'then'],
        },
      ],

      'no-restricted-properties': [
        'error',
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        },
        {
          object: 'global',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'self',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'window',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'global',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'self',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'window',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          object: 'Math',
          property: 'pow',
          message: 'Use the exponentiation operator (**) instead.',
        },
      ],

      'no-restricted-syntax': [
        'error',
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],

      'no-return-assign': ['error', 'always'],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-script-url': 'error',
      'no-shadow': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',

      'no-unreachable-loop': [
        'error',
        {
          ignore: [],
        },
      ],

      'no-use-before-define': [
        'error',
        {
          functions: true,
          classes: true,
          variables: true,
        },
      ],

      'no-var': 'error',
      'no-void': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',

      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],

      'object-curly-newline': 'off',

      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],

      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],

      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: true,
        },
      ],

      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },

          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',

      'prefer-promise-reject-errors': [
        'error',
        {
          allowEmptyReject: true,
        },
      ],

      'prefer-rest-params': 'error',

      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: true,
        },
      ],

      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',

      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            exceptions: ['-', '+'],
            markers: ['=', '!', '/'],
          },

          block: {
            exceptions: ['-', '+'],
            markers: ['=', '!', ':', '::'],
            balanced: true,
          },
        },
      ],

      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      'semi-style': ['error', 'last'],
      'vars-on-top': 'error',
      yoda: 'error',
    },
  },
]);
