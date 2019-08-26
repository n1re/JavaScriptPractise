function sortLettersInAlphabetical(string) {
    return string.split('').sort().join('')
}

assert(sortLettersInAlphabetical('cba') === 'abc')