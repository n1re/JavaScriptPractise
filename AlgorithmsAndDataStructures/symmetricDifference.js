function sym() {
  const nums = [];
  const hasBeenRemoved = {};

  for (const array of arguments) {
    for (let i = 0; i < array.length; i++) {
      const n = array[i];
      const allNumsI = nums.findIndex(([_n]) => {
        return _n === n;
      });
      if (hasBeenRemoved[n] === undefined) {
        if (allNumsI === -1) {
          nums.push([n, array]);
        } else if (nums[allNumsI][1] !== array) {
          hasBeenRemoved[n] = null;
          nums.splice(allNumsI, 1);
        }
      }
    }
  }

  return nums.map((([ n ]) => n));
}

console.log(
  sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
);