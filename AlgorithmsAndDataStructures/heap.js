'use strict';

const assert = require('assert');

function swap(arr, i1, i2) {
    const tmp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = tmp;

    return [...arr];
}

function generate(arr) {
    const n = arr.length;
    const indexes = (new Array(n)).fill(0);
    const permutations = [[...arr]];

    let i = 0;
    while (i < n) {
        if (indexes[i] < i) {
            let swapped = null;

            if (i % 2 === 0) {
                swapped = swap(arr, 0, i);
            } else {
                swapped = swap(arr, indexes[i], i);
            }

            permutations.push(swapped);

            indexes[i] += 1;
            i = 0;
        } else {
            indexes[i] = 0;
            i += 1;
        }
    }

    return permutations;
}

assert.deepEqual(
    generate([0, 1]),
    [[0, 1], [1, 0]]
);

assert.deepEqual(
    generate(['a', 'b', 'c']),
    [
        ['a', 'b', 'c'],
        ['b', 'a', 'c'],
        ['c', 'a', 'b'],
        ['a', 'c', 'b'],
        ['b', 'c', 'a'],
        ['c', 'b', 'a'],
    ]
);