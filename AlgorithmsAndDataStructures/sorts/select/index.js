'use strict';

function swap(arr, from, to) {
  const tmp = arr[to];
  arr[to] = arr[from];
  arr[from] = tmp;
}

function swapSmallestTo(i, arr) {
  const smallest = Infinity;
  let startI = i;

  for (let i = startI; i < arr.length; i++) {
    const v = arr[i];
    if (v < smallest) smallest = v;
  }

  swap(arr, i, startI);
}

function selectionSort(array) {

  for (let i = 0; i < array.length - 1; i++) {
    swapSmallestTo(i, array);
  }
  // change code below this line
  return array;
  // change code above this line
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));