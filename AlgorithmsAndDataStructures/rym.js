/**
 * @param {string} s
 * @return {number}
 */
 const symbolToInteger = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

var romanToInt = function(s) {
  const symbolsList = s.split('')
  let summ = 0
  for (let i = symbolsList.length - 1; i > -1; i--) {
    const currentSymbol = symbolsList[i]
    const nextSymbol = symbolsList[i - 1]
    const currentInteger = symbolToInteger[currentSymbol]
    const nextInteger = symbolToInteger[nextSymbol]

    summ += currentInteger

    if (nextInteger < currentInteger) {
      summ -= nextInteger
      i -= 1
    }
  }
  return summ
};

console.log(romanToInt('XIV'))
