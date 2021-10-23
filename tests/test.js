const assert = require('assert');

// eslint-disable-next-line import/no-extraneous-dependencies
const { ESLint } = require('eslint');

(async function tests() {
  const input = ['index.js', 'tests/test.js'];

  const eslint = new ESLint({
    overrideConfig: {
      env: { es6: true, node: true },
    },
    overrideConfigFile: 'index.js',
    useEslintrc: false,
  });

  const output = await eslint.lintFiles(input);

  let errorCount = 0;
  let warningCount = 0;

  input.forEach((file, index) => {
    if (output[index].messages.length) {
      // eslint-disable-next-line no-console
      console.log(output[index].messages);
    }
    assert(output[index].filePath.endsWith(file));

    errorCount += output[index].errorCount;
    warningCount += output[index].warningCount;
  });

  // eslint-disable-next-line no-unused-vars
  const quotes = `We could almost call it "music" but it's not`;

  assert.equal(
    errorCount,
    0,
    `Should be 0 errors but there were ${errorCount}`,
  );

  assert.equal(
    warningCount,
    0,
    `Should be 0 warnings but there were ${warningCount}`,
  );
})();
