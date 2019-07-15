const compare = require('./index.js');

const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

const assert = require('assert');

assert(compare({1: 1, 2: 2}, {1: 1, 2: 2}) === true);
assert(compare({1: 2, 2: 2}, {1: 1, 2: 2}) === false);

let start = process.hrtime();

for (let i = 0; i < Math.pow(10, 7); i++) {
    compare({1: 2, 2: 2}, {1: 1, 2: 2});
}

let end = process.hrtime(start);
console.log(end);

start =  process.hrtime();
for (let i = 0; i < Math.pow(10, 7); i++) {
    matches({1: 2, 2: 2}, {1: 1, 2: 2});
}
end = process.hrtime(start);
console.log(end);