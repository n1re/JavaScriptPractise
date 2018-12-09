class Log {
  constructor() {
    this._messages = [];
  }

  get messages() {
    return this._messages;
  }

  add(message) {
    this._messages.push({
      message: message,
      date: Date.now()
    });
  }

  [Symbol.iterator]() {
    return this._messages.values()
  }
}

module.exports = Log;