const { strictEqual } = require('assert')

const startSumm = (a) => {
  let summ = a

  const endSumm = (b) => {
    if (b === undefined) {
      return summ
    } else {
      summ += b
      return endSumm
    }
  }

  return endSumm
}

strictEqual(startSumm(2)(3)(), 5)
strictEqual(startSumm(2)(3)(4)(), 9)
strictEqual(startSumm(2)(3)(4)(5)(), 14)
