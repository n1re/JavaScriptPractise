module.exports = function logExecutionTime(label, func) {
    setTimeout(() => {
        console.time(label);
        func();
        console.timeEnd(label);
    }, 0);
};