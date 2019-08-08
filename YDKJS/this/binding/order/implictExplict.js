// Explict > implict

function foo() {
    console.log(this.a)
}

const obj1 = {
    a: 2,
    foo
}

const obj2 = {
    a: 3,
    foo
}

obj1.foo() // 2
obj2.foo() // 3

obj1.foo.call(obj2) // 3
obj2.foo.call(obj1) // 2