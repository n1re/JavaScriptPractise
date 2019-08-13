const assert = require('assert').strict;

// default binding has the lowest priority


// explict binding has priority over implict binding

const logA = function() {
    return this.a
}

const forImplict = {
    a: 2,
    logA
}

const forExplict = {
    a: 3
}

assert(forImplict.logA() === 2)

assert(forImplict.logA.call(forExplict) === 3)


// new has priority over implict binding

const setA = function(value) {
    this.a = value
}

const testNewVersusImplictContext = {
    a: 2,
    setA
}

const createdBySetANewCall = new setA(3)

assert(createdBySetANewCall.a === 3)
assert(testNewVersusImplictContext.a === 2)

// new has priority over es5 bind

const testNewVersusES5Bind = {
    a: 2
}

const setAES5Binded = setA.bind(testNewVersusES5Bind)

const createdBySetAES5BindedNewCall = new setAES5Binded(5)

assert(createdBySetAES5BindedNewCall.a === 5)
assert(testNewVersusES5Bind.a === 2)

// but directly hard binded function will be binded anyway

const testHardBind = {
    a: 2
}

const bind = function(fn, context) {
    return function() {
        fn.apply(context, arguments)
    }
}

const setAHardBinded = bind(setA, testHardBind)

const setAHardBindedNewResult = new setAHardBinded('hard')

assert(setAHardBindedNewResult.a === undefined)
assert(testHardBind.a === 'hard')