// new > than Function.prototype.bind

function foo(something) {
    this.a = something
}

const obj1 = {}

const bar = foo.bind(obj1)

bar(2)
console.log(obj1) // { a: 2 }

new bar(3)
console.log(obj1) // { a: 2 } - obj not changed, changed created by new call object

console.log(new bar(3)) // foo { a: 3 } - loggind object, created with new call