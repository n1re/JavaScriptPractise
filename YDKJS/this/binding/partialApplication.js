function summTwoValues(a, b) {
    this.val = a + b
}

const summTwoValuesWithPartialApplication = summTwoValues.bind(null, 1, 2)

assert((new summTwoValuesWithPartialApplication()).val === 3)
