function bubbleSort(arr) {
  let needsSwap = true;
  while (needsSwap) {
      needsSwap = false;
      for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
            needsSwap = true;
          }
      }
  }

  return arr;
}

function swap(arr, i, j) {
    const tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
}

const test = require('./test');
test(bubbleSort);