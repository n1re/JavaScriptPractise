const assert = require('assert').strict;

function foo() {
	// возвращаем стрелочную функцию
	return () => {
		// Здесь `this` лексически заимствован из `foo()`
		return this.a
	}
}

const obj = {
	a: 2
};

global.a = 3

const bar = foo.call( obj )

assert(bar() === 2)

function someTimeOutedFunc() {
    setTimeout(() => {
        assert(this.a === 2)
    }, 100)
}

someTimeOutedFunc.call(obj)

// under ES6 version of above pattern

function anotherTimeOutedFunc() {
    var self = this;

    setTimeout(() => {
        assert(self.a === 2);
    });
}

anotherTimeOutedFunc.call(obj)
