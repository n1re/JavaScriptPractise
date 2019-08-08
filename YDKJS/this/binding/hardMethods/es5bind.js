function _logAPlus(something) {
    console.log(this.a, something)

    return this.a + something
}

const obj = {
    a: 2
}

const logAPlus = _logAPlus.bind(obj)

logAPlus(2) // 2 2

console.log(logAPlus.name) // (from ES6) bound _logAPlus