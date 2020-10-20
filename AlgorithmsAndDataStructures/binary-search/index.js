function binarySearch(list, n) {
  let start = 0;
  let end = list.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    const value = list[middle];
    
    if (n == value) {
      return middle;
    }

    if (n < value) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3], 3));