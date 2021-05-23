const { ok, deepStrictEqual } = require('assert')

// in JS there are 8 types (at may 2021):
// 7 simple:
  Number
  Boolean
  String
  null
  undefined
  Symbol
  BigInt
// 1 not:
  Object

// Getting type:
ok(typeof null === 'object')
//or
ok(typeof('') === 'string')

//possible typeof results:
ok(typeof '' === 'string')
ok(typeof 1 === 'number')
ok(typeof NaN === 'number')
ok(typeof {} === 'object')
ok(typeof (() => {}) === 'function')
ok(typeof null === 'object')
ok(typeof undefined === 'undefined')
ok(typeof Symbol('huy') ===  'symbol')
ok(typeof 10n === 'bigint')

// 0-division result:
ok(1 / 0 === Infinity)
ok(-1 / 0 === -Infinity)

// "special" operations results:
ok(isNaN(Math.sqrt(-1)))
ok(isNaN('s' / 2))
ok('' / 2 === 0)
ok(isNaN(0 / 0))
ok((NaN === NaN) === false)

function zip(...objects) {
  const zipped = {}
  for (const object of objects) {
    for (const [key, value] of Object.entries(object)) {
      if (zipped.hasOwnProperty(key) === false) {
        zipped[key] = value
      }
    }
  }
  return zipped
}

deepStrictEqual(
  zip({x: '1', y: '2'}, { y: '3'}),
  { x: '1', y: '2' }
)