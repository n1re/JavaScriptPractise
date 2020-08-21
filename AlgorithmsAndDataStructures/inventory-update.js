'use strict';

const assert = require('assert').strict;

function determineStockInsertPosition(stock, id) {
  for (let i = 0; i < stock.length; i++) {
    const _id = stock[i][1];
    if (id < _id) return i;
  }
  return stock.length;
}

function updateInventory(stock, arr2) {
  // All inventory must be accounted for or you're fired!
  for (const item of arr2) {
    const [count, id] = item;
    const stockI = stock.findIndex(item => item[1] === id);
    if (stockI === -1) {
      const i = determineStockInsertPosition(stock, id);
      stock.splice(i, 0, item);
    } else {
      stock[stockI][0] += count;
    }
  }
  return stock;
}

assert.deepEqual(
  updateInventory(
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ],
    [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ]
  ),
  [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
);