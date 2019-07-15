const compare = (first, second) => {
    for (let key in first) {

        if (first.hasOwnProperty(key) && first[key] === second[key]) {
            continue;
        } 

        return false;
    }

    return true;
}

const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

const assert = require('assert');

assert(compare({1: 1, 2: 2}, {1: 1, 2: 2}) === true);
assert(compare({1: 2, 2: 2}, {1: 1, 2: 2}) === false);

let start = new Date();

for (let i = 0; i < Math.pow(10, 7); i++) {
    compare({1: 2, 2: 2}, {1: 1, 2: 2});
}

let end = new Date() - start;
console.log(end);

start = new Date();
for (let i = 0; i < Math.pow(10, 7); i++) {
    matches({1: 2, 2: 2}, {1: 1, 2: 2});
}
end = new Date() - start;
console.log(end);

module.exports = compare;