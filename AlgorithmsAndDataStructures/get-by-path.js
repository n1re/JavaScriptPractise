'use strict';

function get(obj, path, defaultValue, separator = '.') {
  const keys = path.split(separator);

  let output = obj;

  for (const key of keys) {
    const next = output[key];

    if (next === undefined) return defaultValue;

    output = next;
  }

  return output;
}

const assert = require('assert');

const testData = {
  a: 1,
  b: {
    c: 2,
    e: {
      d: 3
    }
  },
  d: null,
};

assert.strictEqual(get(testData, 'a'), 1);
assert.strictEqual(get(testData, 'b.c'), 2);
assert.strictEqual(get(testData, 'c'), undefined);
assert.strictEqual(get(testData, 'c.d.e'), undefined);
assert.strictEqual(get(testData, 'd'), null);
assert.strictEqual(get(testData, 'b.e.d'), 3);
assert.deepStrictEqual(get(testData, 'b.e'), testData.b.e);
assert.deepStrictEqual(get(testData, 'z.b.e', false), false);
/**
 * @todo handle case below
 */
// assert.strictEqual(get(testData, 'd.e'), undefined);