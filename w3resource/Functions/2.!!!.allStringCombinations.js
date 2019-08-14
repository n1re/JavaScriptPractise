const assert = require('assert')

function allStringCombinations(string) {
    const letters = string.split('')
    const combinations = []

    letters.forEach(letter => combinations.push(letter))

    for (let i = 0; i < Math.round(letters.length / 2); i++) {
        const letter = letters[i]
        const lettersWOCurrent = letters.filter(
            otherLetter => otherLetter !== letter
        )

        lettersWOCurrent.forEach(
            otherLetter => {
                const potentialNewCombination = otherLetter + letter
                const reversed = potentialNewCombination.split('').reverse().join('')

                if (combinations.indexOf(reversed) === -1) {
                    combinations.push(potentialNewCombination)
                }
            }
        )
    }

    combinations.push(string)

    return combinations
}

assert.deepEqual(
    allStringCombinations('dog'),
    [
        'd', 'o', 'g',
        'od', 'gd', 'go',
        'dog'
    ]
)
assert.deepEqual(
    allStringCombinations('dogasdasd'),
    [
        'd', 'o', 'g',
        'a', 's', 'd',
        'a', 's', 'd',
        'od', 'gd', 'ad',
        'sd', 'ad', 'sd',
        'go', 'ao', 'so',
        'ao', 'so', 'ag',
        'sg', 'ag', 'sg',
        'sa', 'sa', 'dogasdasd'
    ]
)