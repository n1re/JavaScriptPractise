const assert = require('assert');
const logExecutionTime = require('./logExecutionTime');

(function(){
    function fibonacci(n) {
        if (n < 2) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    test(fibonacci);
    logExecutionTime('recursive', () => fibonacci(20));
})();

(function(){
    function fibonacci(n) {
        const members = [1, 1];
        for (let i = 2; i < n; i++) {
            members.push(members[i - 2] + members[i - 1]);
        }
        return members[n - 1];
    }

    test(fibonacci);
    logExecutionTime('with array', () => fibonacci(20));
})();

function test(fibonacci) {
    assert.strictEqual(fibonacci(1), 1);
    assert.strictEqual(fibonacci(2), 1);
    assert.strictEqual(fibonacci(3), 2);
    assert.strictEqual(fibonacci(10), 55);
}