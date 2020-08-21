'use strict';

const assert = require('assert').strict;

module.exports = function test(expectedOutput, func) {
  const args = Array.from(arguments).splice(2);
  return assert.deepEqual(
    func(...args),
    expectedOutput
  );
}