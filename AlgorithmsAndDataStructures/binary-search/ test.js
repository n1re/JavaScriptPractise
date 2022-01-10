
const assert = require('assert')

module.exports = (search) => {
  const testArray = [1,2,3,4,5,6,7,8]
  testArray
    .forEach(v => assert.equal(search(v, testArray), v - 1))
}

