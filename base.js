module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],

    // Beware about turning this rule back on. The rule encourages you to
    // create static class methods on React components when they don't use
    // `this`.  However, it will not warn you if you access `this` in a static
    // method accidentally (which would most likely be a mistake).
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

    // Turn off function paren newline.
    'function-paren-newline': 'off',

    // This makes sure imported modules exist.
    'import/no-unresolved': ['error'],

    // This makes sure imported names exist.
    'import/named': ['error'],

    // This will catch accidental default imports when no default is defined.
    'import/default': ['error'],

    // This makes sure `*' imports are dereferenced to real exports.
    'import/namespace': ['error'],

    // This catches any export mistakes.
    'import/export': ['error'],

    // This catches default names that conflict with actual exported names.
    // For example, this was probably a typo:
    //   import foo from 'bar';
    // that should be corrected as:
    //   import { foo } from 'bar';
    'import/no-named-as-default': ['error'],

    // This catches possible typos like trying to access a real export on a
    // default import.
    'import/no-named-as-default-member': ['error'],

    // This prevents exporting a mutable variable.
    'import/no-mutable-exports': ['error'],

    // This makes sure package.json defines dev vs. prod dependencies correctly.
    'import/no-extraneous-dependencies': [
      'error',
      {
        // The following are not allowed to be imported. See .eslintrc in other
        // directories (like ./test) for where this gets overidden.
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],

    // This ensures imports are at the top of the file.
    'import/imports-first': ['error'],

    // This reports when you accidentally import/export an object twice.
    'import/no-duplicates': ['error'],

    // This ensures import statements never provide a file extension in the path.
    'import/extensions': ['error', 'never'],

    // This ensures imports are organized by type and that groups are separated
    // by a new line.
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

    // Turn of the preference to have a default export.
    'import/prefer-default-export': ['off'],

    // This ensures a new line after all import statements.
    'import/newline-after-import': ['error'],

    // Add jest specific eslint rules.
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

    // We do not want to enforce this rule, which we inherit.
    // Awaits in loops can be acceptable.
    'no-await-in-loop': 'off',

    // Generally avoid the use of console.
    'no-console': 'error',

    // We use import/no-duplicates instead because it supports Flow types.
    'no-duplicate-imports': 'off',

    // Airbnb sets `allowElseIf` to false but we do not want that.
    'no-else-return': 'error',

    'no-plusplus': 'off',

    // Override the base rule to remove 'ForInStatement' and 'ForOfStatement'
    // from restrictions.
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

    'no-underscore-dangle': 'off',

    'object-curly-newline': 'off',

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    // We turn this off for assignments.
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

    // Specify whether double or single quotes should be used. Allows template
    // literals.
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],

    // Semi-colons should always be at the end of statements.
    'semi-style': ['error', 'last'],

    // Disable camelcase rule
    camelcase: 'off',
  },
};
