function logA() {
    console.log(this.a)
}

const context = {
    a: 2,
    logA
}

context.logA() // 2

const obj2 = {
    a: 42,
    logA
}

const obj1 = {
    a: 2,
    obj2
}

obj1.obj2.logA() // 42