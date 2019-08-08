function identify(log) {
    const name = this.name.toUpperCase()

    log && console.log(name)

    return name
}

function speak() {
    const greeting = `Hello, I'm ${identify.call(this)}`
    console.log(greeting)
}

const me = {
	name: "Kyle"
}

const you = {
	name: "Reader"
}

identify.call(me, true) // KYLE
identify.call(you, true) // READER

speak.call(me) // Hello, I'm KYLE
speak.call(you) // Hello, I'm READER

try {
    speak.call() // Error
} catch (err) {
    console.log(err)
}
