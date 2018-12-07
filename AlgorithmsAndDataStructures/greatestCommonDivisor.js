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

// more optimal algorithm
function gcd(a, b) {
  let reminder;
  // while reminder is not a zero (target condition)
  while (b !== 0) {
    // calculating reminder
    reminder = a % b;
    
    // saving second number in memory
    a = b;
    //saving reminder to % a on it in future if it is not a zero
    b = reminder;
  }

  return a;
}

console.log(gcd(68, 36));