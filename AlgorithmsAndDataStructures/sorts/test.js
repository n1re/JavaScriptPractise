'use strict';

const assert = require('assert').strict;

function test(bubble) {
    assert.deepEqual(
        bubble([3, 2, 1]),
        [1, 2, 3]
    );
    assert.deepEqual(
        bubble([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]),
        [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
    );
}

module.exports = test;