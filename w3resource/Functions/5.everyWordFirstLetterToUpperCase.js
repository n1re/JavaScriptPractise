function everyWordFirstLetterToUpperCase(string) {
    const words = string.split(' ')

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        const firstLetter = word[0]
        const upperCased = firstLetter.toUpperCase()

        words[i] = word.replace(firstLetter, upperCased)
    }

    return words.join(' ')
}

assert(
    everyWordFirstLetterToUpperCase('test string') === 'Test String'
)