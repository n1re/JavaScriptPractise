const assert = require('assert').strict

function foo() {
    return this.a
}

global.a = 2

//passing null as a context to call, apply, bind recieved default binding
assert(foo.call(null) === 2)
assert(foo.apply(null) === 2)
assert(foo.bind(null)() === 2)

assert(foo.call(undefined) === 2)
assert(foo.apply(undefined) === 2)
assert(foo.bind(undefined)() === 2)

function summAB(a, b) {
    return a + b
}

assert(summAB.apply(null, [1, 2]) === 3)

const summAd2B = summAB.bind(null, 2)

assert(summAd2B(2) === 4)

// using DMZ (de-militarized zone) for no-context call\apply\bind usage for nore safe call

const dmz = {}
const summAd2BSafe = summAB.bind(dmz, 2)

assert(summAd2BSafe.apply(dmz, [1]) === 3)

// indirection

function foo() {
    return this.a
}

global.a = 2
const b = { a: 3, foo }
const p = { a: 4 }

assert(b.foo() === 3)
/**
 * the result of assignment is link on foo 
 * function and it will be called via default method
 */
assert((p.foo = b.foo)() === 2 && foo() === 2)