const assert = require('assert').strict;
const TEST_RANGE = [0, 1000];
const logExecutionTime = require('./logExecutionTime');

(function() {
    function rangeOfNumbers(startNum, endNum) {
        if (startNum <= endNum) {
            return [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
        }
        return [];
    };

    test(rangeOfNumbers);

    logExecutionTime('recursive', () => rangeOfNumbers(...TEST_RANGE));
})();

(function() {
    function rangeOfNumbers(startNum, endNum) {
        const output = [];
        for (let i = startNum; i <= endNum; i++) {
            output.push(i);
        }
        return output;
    }

    test(rangeOfNumbers);
    logExecutionTime('loop', () => rangeOfNumbers(...TEST_RANGE));
})();

function test(func) {
    assert.deepEqual(func(4, 4), [ 4 ]);
    assert.deepEqual(func(4, 6), [ 4, 5, 6 ]);
    assert.deepEqual(func(-1, 10), [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
}