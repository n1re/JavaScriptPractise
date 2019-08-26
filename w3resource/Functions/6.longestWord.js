function longestWord(string) {
    const words = string.split(' ')
    let longestWord = ''

    for (const word of words) {
        const length = word.length
        const longestLength = longestWord.length

        if (length > longestLength) {
            longestWord = word
        }
    }

    return longestWord
}

assert(longestWord('try to find longest word') === 'longest')