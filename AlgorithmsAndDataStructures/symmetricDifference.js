const test = require('../test');

function getWithout(arr, n) {
  const output = [];
  for (const _n of arr) {
    if (n !== _n) output.push(_n);
  }
  return output;
}

function getWithoutDuplicates(arr) {
  const output = [];
  for (const n of arr) {
    if (output.indexOf(n) === -1) output.push(n);
  }
  return output;
}

function calcSym(a1, a2) {
  const a1Unique = [];
  for (const n of getWithoutDuplicates(a1)) {
    const a2Index = a2.indexOf(n);
    if (a2Index === -1) {
      a1Unique.push(n);
    } else {
      a2 = getWithout(a2, n);
    }
  }

  return [...a1Unique, ...getWithoutDuplicates(a2)].sort((a, b) => a - b);
}

test(
  [3, 4, 5],
  calcSym,
  [1, 2, 3],
  [5, 2, 1, 4]
);

function sym() {
  let a1 = arguments[0];
  let a2 = arguments[1];
  let output = null;
  let nextIdx = 2;
  output = calcSym(a1, a2);

  while (nextIdx < arguments.length) {
    a1 = output;
    a2 = arguments[nextIdx++];
    output = calcSym(a1, a2);
  }

  return output;
}

test(
  [1, 4, 5],
  sym,
  [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]
);