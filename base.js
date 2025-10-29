module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Enforces return statements in callbacks of array's methods
    'array-callback-return': ['error', { allowImplicit: true }],

    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],

    // Treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // Disable camelcase rule
    camelcase: 'off',

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

    // Require return statements to either always or never specify values
    'consistent-return': 'error',

    // Require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    'default-param-last': 'error',

    // Encourage use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Turn off function paren newline.
    'function-paren-newline': 'off',

    // Require function expressions to have a name
    'func-names': 'warn',

    // Require all requires be top-level
    // TODO: This rule is deprecated and scheduled for removal in ESLint v11.
    'global-require': 'error',

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': 'error',

    // Make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // Disallow the use of Boolean literals in conditional expressions
    // Also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow usage of expressions in statement position
    'no-unused-expressions': ['error'],

    // Disallow unused vars but ignore the rest property’s siblings, e.g. `foo`
    // will be ignored in `const { foo, ...rest } = data` thanks to `...rest`.
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],

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

    // Require or disallow newlines around directives
    // TODO: This rule is deprecated and scheduled for removal in ESLint v11.
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],

    // Require or disallow an empty line between class members
    // TODO: This rule is deprecated and scheduled for removal in ESLint v11.
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // Enforce a maximum number of classes per file
    'max-classes-per-file': ['error', 1],

    // Require a capital letter for constructors
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

    // Disallow use of the Array constructor
    'no-array-constructor': 'error',

    // We do not want to enforce this rule, which we inherit.
    // Awaits in loops can be acceptable.
    'no-await-in-loop': 'off',

    // Disallow use of bitwise operators
    'no-bitwise': 'error',

    // Disallow use of the Buffer() constructor
    // TODO: This rule is deprecated and scheduled for removal in ESLint v11.
    'no-buffer-constructor': 'error',

    // Disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // Generally avoid the use of console.
    'no-console': 'error',

    // Disallow returning value in constructor
    'no-constructor-return': 'error',

    // Disallow use of the continue statement
    'no-continue': 'error',

    // We use import/no-duplicates instead because it supports Flow types.
    'no-duplicate-imports': 'off',

    // Disallow else after a return in an if
    'no-else-return': ['error', { allowElseIf: false }],

    // Disallow use of eval()
    'no-eval': 'error',

    // Disallow adding to native types
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'error',

    // Disallow Unnecessary Labels
    'no-extra-label': 'error',

    // disallow empty functions, except for standalone funcs/arrows
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // Disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // Disallow usage of __iterator__ property
    'no-iterator': 'error',

    // Disallow use of labels for anything other than loops and switches
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // Disallow creation of functions within loops
    'no-loop-func': 'error',

    // Disallow use of chained assignment expressions
    'no-multi-assign': ['error'],

    // Disallow use of multiline strings
    'no-multi-str': 'error',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // Disallow use of new operator for Function object
    'no-new-func': 'error',

    // Disallow use of the Object constructor
    // TODO: This rule is deprecated, and we should be using
    // `no-object-constructor` now.
    'no-new-object': 'error',

    // Disallow use of new operator with the require function
    'no-new-require': 'error',

    // Disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // Disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // Disallow reassignment of function parameters
    // Disallow parameter object manipulation except for specific exclusions rule
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
        ],
      },
    ],

    // Disallow string concatenation with __dirname and __filename
    // TODO: This rule is deprecated and scheduled for removal in ESLint v11.
    'no-path-concat': 'error',

    'no-plusplus': 'off',

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',

    // disallow usage of __proto__ property
    'no-proto': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          'default', // use `export default` to provide a default export
          'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
        ],
      },
    ],

    // Disallow certain object properties
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

    // Disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // Disallow use of comma operator
    'no-sequences': 'error',

    // Disallow use of `javascript:` urls
    'no-script-url': 'error',

    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // Restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // Disallow useless string concatenation
    'no-useless-concat': 'error',

    // Disallow redundant return; keywords
    'no-useless-return': 'error',

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    'no-underscore-dangle': 'off',

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': [
      'error',
      {
        // See: https://eslint.org/docs/latest/rules/no-unreachable-loop#ignore
        ignore: [],
      },
    ],

    // Disallow use of variables before they are defined
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],

    // require let or const instead of var
    'no-var': 'error',

    // Disallow use of void operator
    'no-void': 'error',

    // Disallow useless computed property keys
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    'object-curly-newline': 'off',

    // require method and property shorthand syntax for object literals
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // Allow just one var statement per function
    'one-var': ['error', 'never'],

    // Require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],

    // suggest using of const declaration for variables that are never modified
    // after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        // Avoid conflicts with the `no-use-before-define` rule.
        ignoreReadBeforeAssign: true,
      },
    ],

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

    // Disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 'error',

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // Prefer use of an object spread over Object.assign
    'prefer-object-spread': 'error',

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Use rest parameters instead of arguments
    'prefer-rest-params': 'error',

    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],

    // Suggest using the spread syntax instead of .apply()
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    'prefer-template': 'error',

    // Require use of the second argument for parseInt()
    radix: 'error',

    // Require or disallow a space immediately following the // or /* in a comment
    // TODO: This rule is deprecated and scheduled for removal in ESLint v11.
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],

    // Require a Symbol description
    'symbol-description': 'error',

    // Require or disallow the Unicode Byte Order Mark
    'unicode-bom': ['error', 'never'],

    // Specify whether double or single quotes should be used. Allows template
    // literals.
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],

    // Semi-colons should always be at the end of statements.
    'semi-style': ['error', 'last'],

    // Require to declare all vars on top of their containing scope
    'vars-on-top': 'error',

    // Require or disallow Yoda conditions
    yoda: 'error',
  },
};
