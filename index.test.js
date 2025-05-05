const postcss = require('postcss');
const { equal } = require('node:assert');
const { test } = require('node:test');

const plugin = require('./');

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  equal(result.css, output);
  equal(result.warnings().length, 0);
}

test('default behavior, no options', async () => {
  await run(
    '.foo:disabled { background-color: #f9f9f9; }',
    '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
    {}
  );
});

test('addAttributes: true', async () => {
  await run(
    '.foo:disabled { background-color: #f9f9f9; }',
    '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
    { addAttribute: true }
  );
});

test('addAttributes: false', async () => {
  await run(
    '.foo:disabled { background-color: #f9f9f9; }',
    '.foo:disabled { background-color: #f9f9f9; }',
    { addAttribute: false }
  );
});

test('addClass: true', async () => {
  await run(
    '.foo:disabled { background-color: #f9f9f9; }',
    '.foo:disabled, .foo.disabled, .foo[disabled] { background-color: #f9f9f9; }',
    { addClass: true }
  );
});

test('addClass: false', async () => {
  await run(
    '.foo:disabled { background-color: #f9f9f9; }',
    '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
    { addClass: false }
  );
});
