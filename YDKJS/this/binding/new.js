function create() {
    this.a = 2
}

const created = new create()

/**
 * What happends if new call used:
 *  1. new object has been created
 *  2. it links with prototype
 *  3. it binds as a context for the function call
 *  4. except returning custom object, call will return constructed object
 */

console.log(created.a) // 2

function createAndReturn() {
    this.a = 2

    return {
        a: 3
    }
}

const createdAndReturned = new createAndReturn()

console.log(createdAndReturned.a) // 3