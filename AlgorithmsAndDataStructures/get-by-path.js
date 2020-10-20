'use strict';

function get(obj, path, separator = '.') {
  const _path = path.split(separator);

  if (_path.length === 0) return;

  let current = obj[path[0]];

  if (current === undefined) return;

  for (let i = 1; i < _path.length; i++) {
    const next = current[_path[i]];

    if (next === undefined) return;

    current = next;
  }

  return current;
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
assert.strictEqual(get(testData, 'd'), null);
assert.strictEqual(get(testData, 'b.e.d'), 3);
assert.deepStrictEqual(get(testData, 'b.e'), testData.b.e);
/**
 * @todo handle case below
 */
// assert.strictEqual(get(testData, 'd.e'), undefined);