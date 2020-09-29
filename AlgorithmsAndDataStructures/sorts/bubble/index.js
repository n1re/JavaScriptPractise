'use strict';

function swap(arr, i1, i2) {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}

function upValue(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
}

function bubbleSort(array) {
  array.forEach(() => upValue(array));

  return array;
}

const test = require('./test');
test(bubbleSort);