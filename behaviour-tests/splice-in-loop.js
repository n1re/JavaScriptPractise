'use strict';

const assert = require('assert').strict;
const arr = [1, 2, 3, 4, 5];
const iteratedOver = [];

for (let i = 0; i < arr.length; i++) {
    iteratedOver.push(arr[i]);
    arr.splice(i--, 1);
}

assert.deepEqual(
    iteratedOver,
    [1, 2, 3, 4, 5]
);