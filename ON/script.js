const Log = require('../Iterator/Log');
const log = new Log();

function sum(n) {
  log.add(`sum function called with ${n}`);

  if (n === 1) return n;
  const lessN = sum(--n);
  return n + lessN;
}

sum(3);
const after3call = log.messages.length;
console.log(after3call); // 3

sum(4);
const after4call = log.messages.length;
console.log(after4call - after3call); // 4

// sum works with BigO = O(N)