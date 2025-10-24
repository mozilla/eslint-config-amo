const { defineConfig } = require('eslint/config');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const base = require('./base');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  base,
  {
    extends: compat.extends(
      'plugin:jsx-a11y/recommended',
      'plugin:react/recommended',
    ),

    rules: {
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: [],
          specialLink: ['to'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],

      'jsx-a11y/label-has-for': [
        'error',
        {
          components: ['Label'],

          required: {
            every: ['id'],
          },

          allowChildren: false,
        },
      ],

      'react/destructuring-assignment': ['off', 'always'],
      'react/forbid-prop-types': 'off',

      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.js', '.jsx'],
        },
      ],

      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-key': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/no-string-refs': 'error',
      'react/prefer-stateless-function': 'off',
      'react/require-default-props': 'off',
      'react/sort-comp': 'off',
      'react/static-property-placement': ['error', 'static public field'],
    },
  },
]);
