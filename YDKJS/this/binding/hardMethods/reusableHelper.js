function bind(fn, obj) {
    return function() {
        return fn.apply(obj, arguments)
    }
} 

function _llogAPlus(something) {
    console.log(this.a, something)

    return this.a + something
}

const obj = {
    a: 2
}

const logAPlus = bind(_llogAPlus, obj)

logAPlus(2) // 2, 2
new logAPlus(3) // 2, 3