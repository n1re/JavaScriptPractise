const Log = require('./Log');

const log = new Log();
log.add('privet');
log.add('kak dela');

// it works because we wrote iterator for Log
for (message of log) {
  console.log(message);
}

class Log2 extends Log {
  [Symbol.iterator]() {
    let i = 0;
    const messages = this._messages;

    return {
      next() {
        const value = messages[i++];

        if (value) return { value: value, done: false}
        return {value: value, done: true}
      }
    }
  }
}

const log2 = new Log2();
log2.add('salam');
log2.add('norm');

// it works because we wrote iterator for Log
for (message of log2) {
  console.log(message);
}