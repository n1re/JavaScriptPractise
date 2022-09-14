const assert = require('assert');
const { get } = require('./get-by-path')

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

function test(get) {
  assert.strictEqual(get(testData, 'a'), 1);
  assert.strictEqual(get(testData, 'b.c'), 2);
  assert.strictEqual(get(testData, 'c'), undefined);
  assert.strictEqual(get(testData, 'c.d.e'), undefined);
  assert.strictEqual(get(testData, 'd'), null);
  assert.strictEqual(get(testData, 'b.e.d'), 3);
  assert.deepStrictEqual(get(testData, 'b.e'), testData.b.e);
  assert.deepStrictEqual(get(testData, 'z.b.e', false), false);
}

test(get)