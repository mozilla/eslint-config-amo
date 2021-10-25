module.exports = {
  // Use `airbnb`, which includes `airbnb:base` and the React-related configs.
  extends: ['airbnb', 'amo/base'],
  rules: {
    // Turn down warnings for our custom Link component.
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // Don't require validation of nesting just id + for attribute.
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

    // Airbnb has turned this rule on again but we don't want that yet.
    'react/destructuring-assignment': ['off', 'always'],

    // The airbnb default of this rule mainly encourages `shape` over `object`
    // but there are too many bugs in the linter to use `shape` accurately.
    'react/forbid-prop-types': 'off',

    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 'off',

    // See: https://github.com/mozilla/eslint-config-amo/issues/63
    'react/sort-comp': 'off',

    // Use a 2 space indent for jsx props.
    'react/jsx-indent-props': ['error', 2],

    // Aligns closing brackets in jsx with the opening line.
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],

    // Allow more than one prop when the jsx is confined to a single line.
    // Defaults to 1 prop per line when the jsx spans multiple lines.
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],

    // Make sure the first prop is on a new line for multiline props.
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-key': 'error',
    'react/no-string-refs': 'error',

    // Enforces where React component static properties should be positioned.
    // We want them in the class body.
    'react/static-property-placement': ['error', 'static public field'],

    // Airbnb enforces this but we use this feature a lot!
    'react/jsx-props-no-spreading': 'off',
  },
};
