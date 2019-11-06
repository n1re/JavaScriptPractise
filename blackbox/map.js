const arr = ['i1', 'i2', 'i3'];
const mod = val => `modified ${val}`;

const custom_map = (arr, mod) => {
    const modified = [];

    arr.forEach(el => modified.push(mod(el)));

    return modified;
}

assert.deepEqual(
    custom_map(arr, mod),
    arr.map(mod)
);