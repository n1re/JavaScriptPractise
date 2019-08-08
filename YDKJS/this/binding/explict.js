function logA() {
    console.log(this.a)
}

const obj = {
    a: 2
}

logA.call(obj) // 2
