'use strict';

const assert = require('assert');

module.exports = function test(heap) {
    assert.deepEqual(
        heap([0, 1]),
        [[0, 1], [1, 0]]
    );

    assert.deepEqual(
        heap(['a', 'b', 'c']),
        [
            ['a', 'b', 'c'],
            ['b', 'a', 'c'],
            ['c', 'a', 'b'],
            ['a', 'c', 'b'],
            ['b', 'c', 'a'],
            ['c', 'b', 'a'],
        ]
    );
};