const FibonacciNumbers = require('./FibonacciNumbers');

const fibonacciNumbers = new FibonacciNumbers();

for (let number of fibonacciNumbers) {
  if (number > 100) return;
  console.log(number);
  if (number === Infinity) break;
}