function logA() {
    console.log(this.a)
}

try {
    // nodejs
    global.a = 2
} catch {
    // browser
    var a = 2
}

logA() // 2