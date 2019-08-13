const assert = require('assert')

function reverseNumber(number) {
    const string = number + ''

    return +string.split('').reverse().join('')
}

assert(reverseNumber(14228) === 82241)