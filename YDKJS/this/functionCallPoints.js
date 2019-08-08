function baz() {
    console.log('baz')
    console.log(this)
    bar() // <-- bar call point, callstack: baz, this equal to baz
}

function bar() {
    "use strict"
    console.log('bar')
    console.log(this)
    foo() // <-- foo call point
}

function foo() {
    console.log('foo')
    console.log(this)
}

baz() // <-- baz call point - global scope

