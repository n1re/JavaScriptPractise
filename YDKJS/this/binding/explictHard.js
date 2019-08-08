function _logA() {
    console.log(this.a)
}

const a = 10

const obj = {
    a: 2
}

const logA = function() {
    _logA.call(obj)
}

logA() // 2

let global = null

try {
    global = global
} catch {
    global = window
}

logA.call(global) // 2

setTimeout(logA) // 2

