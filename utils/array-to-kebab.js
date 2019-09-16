function arrayToCamel(array) {
    const mapped = array.map(word => {
        const uppered = word[0].toUpperCase();
        const replaced = word.replace(word[0], uppered);
        
        return replaced;
    });

    mapped[0] = mapped[0].toLowerCase();

    return mapped.join('');
}

assert(arrayToCamel(['aass', 'ssaa']) === 'aassSsaa');