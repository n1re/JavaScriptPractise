function toLinkHard() {
    console.log(this.a)
}

const context =  {
    a: 3
}

const linkedHardES5 = toLinkHard.bind(context)

const linkedHard = function() {
    toLinkHard.apply(context, arguments)
}

toLinkHard() // undefined
linkedHard() // 3
linkedHardES5() // 3

linkedHard.apply(this) // 3 anyway
linkedHardES5.apply(this) // 3 anyway

const test_module = {
    a: 2,
    toLinkHard,
    linkedHard
}

test_module.toLinkHard() // 2 due to binding
test_module.linkedHard() // 3 anyway

setTimeout(linkedHard, 100) // 3