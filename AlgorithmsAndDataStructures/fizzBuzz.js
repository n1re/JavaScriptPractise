const fizzBuzz = n => {
  const output = [];
  
  if (n !== 0 ) output.push(0);

  for (let i = 1; i <= n; i++) {
    const f = i % 3 === 0;
    const b = i % 5 === 0;
    const fb = f && b;
    
    let value = i;

    if (fb) {
      value = 'fizzbuzz';
    } else if (f) {
      value = 'fizz'
    } else if (b) {
      value = 'buzz';
    }
    
    output.push(value);
  }

  return output;
};

console.log(fizzBuzz(6));