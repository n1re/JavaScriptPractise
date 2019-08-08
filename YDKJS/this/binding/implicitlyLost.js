function logA() {
    console.log(this)
}

const obj1 = {
    logA
}

const foo = obj1.logA

foo() // global in node, window in browser

function doSomethingAndCb(cb) {
    cb()
}

doSomethingAndCb(obj1.logA) // global in node, window in browser

setTimeout(obj1.logA, 100) // Timeout in node, window in browser
