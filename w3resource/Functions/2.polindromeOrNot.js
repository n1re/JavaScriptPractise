const assert = require('assert').strict;

function polindromeOrNot(string) {
    const length = string.length
    const iterationsLimit = Math.round(length / 2)
    const symbols = string.split('')
    let isPolyndrome = true

    for (let i = 0; i < iterationsLimit; i++) {
        const symbol = symbols[i]
        const oppositeSymbolIndex = length - 1 - i
        const oppositeSymbol = symbols[oppositeSymbolIndex]

        if (oppositeSymbol !== symbol) {
            isPolyndrome = false
        }
    }

    return isPolyndrome
}

assert(polindromeOrNot('ss') === true)
assert(polindromeOrNot('sas') === true)
assert(polindromeOrNot('true') === false)