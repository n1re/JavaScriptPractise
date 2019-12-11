class FibonacciNumbers {
  [Symbol.iterator]() {
    let a = 0, b = 1;

    return {
      next() {
        const rval = {value: b, done: false}
        b += a;
        a = rval.value;

        return rval;
      }
    };
  }
}

module.exports = FibonacciNumbers;