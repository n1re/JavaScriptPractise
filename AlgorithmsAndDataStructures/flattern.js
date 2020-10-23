'use strict';

/**
 * @todo repeat
 */

const assert = require('assert');

function flatten(list) {
  const output = [];

  function _insertToOutput(arr) {
    for (const el of arr) {
      if (Array.isArray(el)) {
        _insertToOutput(el);
      } else {
        output.push(el);
      }
    }
  }

  _insertToOutput(list);
  
  return output;
}

const func = function() {};
const obj = { a: 1 };

assert.deepEqual(
    flatten([1, 'any [complex] string', null, func, [1, 2, [3, '4'], 0], [], obj]),
    [1, 'any [complex] string', null, func, 1, 2, 3, '4', 0, obj]
);