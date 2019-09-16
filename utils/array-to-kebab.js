function arrayToKebab(array) {
    const toSetFirst = array.map(word => {
        const uppered = word[0].toUpperCase();
        const replaced = word.replace(word[0], uppered);
        
        return replaced;
    });

    return toSetFirst.join('');
}

assert(arrayToKebab(['aass', 'ssaa']) === 'AassSsaa');