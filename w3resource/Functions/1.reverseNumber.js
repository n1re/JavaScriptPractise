function reverseNumber(number) {
    const string = number + ''

    return +string.split('').reverse().join('')
}

console.log(123)
assert(reverseNumber(14228) === 82241)