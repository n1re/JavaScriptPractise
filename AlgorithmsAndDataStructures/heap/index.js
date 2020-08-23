'use strict';

const test = require('./test');

test(heap);

function swap(arr, i1, i2) {
    const tmp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = tmp;

    return [...arr];
}

function heap(arr) {
    const n = arr.length;
    const c = (new Array(n)).fill(0);
    const output = [[...arr]];

    let i = 0;
    while(i < n) {
        if (c[i] < i) {
            let swapped = null;

            if (i % 2 === 0) {
                swapped = swap(arr, 0, i);
            } else {
                swapped = swap(arr, c[i], i);
            }

            output.push(swapped);

            c[i] += 1;
            i = 0;
        } else {
            c[i] = 0;
            i += 1;
        }
    }

    return output;
}

module.exports = heap;