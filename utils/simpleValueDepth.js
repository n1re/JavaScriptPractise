function simpleValueDepth(_value, n = 0) {
    const value = _value[0];
    if (Array.isArray(value))
        return simpleValueDepth(value, ++n);
    return n;
}

simpleValueDepth([[]])

assert.equal(simpleValueDepth([]), 0);
assert.equal(simpleValueDepth([[]]), 1);
assert.equal(simpleValueDepth([[[]]]), 2);
assert.equal(simpleValueDepth([[[[]]]]), 3);