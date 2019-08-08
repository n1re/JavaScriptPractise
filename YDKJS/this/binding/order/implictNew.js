function foo(something) {
    this.a = something
}

const obj1 = {
    foo
}

const obj2 = {}

obj1.foo(2)

console.log(obj1.a) //2

obj1.foo.call(obj2, 3)

console.log(obj2.a) // 3

const bar = new obj1.foo(4)

console.log(obj1.a) // 2
console.log(bar.a) // 4