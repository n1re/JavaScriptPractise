function toCount() {
    this.calledCount++
}

toCount.calledCount = 0;

for (let i = 0; i < 10; i++) {
    toCount.call(toCount)
}

console.log(toCount.calledCount)