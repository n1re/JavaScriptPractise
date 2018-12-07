function greatestCommonDivisor(a, b) {
  const check = divisor => (a % divisor === 0) && (b % divisor === 0);
  let divisor = 1;
  const greatestInput = a > b ? a : b;
  let greatestDivisor = divisor;

  while (divisor < greatestInput) {
    divisor += 1;
    check(divisor) && (greatestDivisor = divisor);
  }

  return greatestDivisor;
}

console.log(greatestCommonDivisor(4, 8));