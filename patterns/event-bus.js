class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!Array.isArray(this.listeners[event])) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event, callback) {
    this.__eventExistanceCheck(event);
    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  }
  
  __eventExistanceCheck(type) {
    if (this.listeners[type] === undefined) {
      throw new Error(`Нет события: ${type}`);
    }
  }

  emit(event, ...args) {
    this.__eventExistanceCheck(event);
    this.listeners[event].forEach(callback => {
      callback(...args);
    });
  }
}

const eventBus = new EventBus();

const callback = (data, x, y) => console.log(data, x, y);

eventBus.on('testEvent', callback);

eventBus.emit('testEvent', { data: 1}, 3, 5);

eventBus.off('testEvent', callback);

eventBus.emit('testEvent');