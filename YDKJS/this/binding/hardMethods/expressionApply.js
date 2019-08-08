function _llogAPlus(something) {
    console.log(this.a, something)

    return this.a + something
}

const obj = {
    a: 2
}

// hard this link with arguments
const logAPlus = function() {
    return _llogAPlus.apply(obj, arguments)
}

logAPlus(2) // 2 2

setTimeout(() => logAPlus(2)) // 2 2