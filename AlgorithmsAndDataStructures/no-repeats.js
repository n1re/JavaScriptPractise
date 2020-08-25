'use strict';

const heap = require('./heap');

function checkNoRepeats(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }
    }

    return true;
}

function permAlone(str) {
    const premutations = heap(str.split(''));
    const noRepeats = premutations.filter(checkNoRepeats);
    return noRepeats.length;
}

console.log(permAlone('aab'));