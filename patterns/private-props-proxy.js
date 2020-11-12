const props = {
  name: 'Abby',
  chat: 'the last of us. Part II',
  getChat() {
    this._privateMethod();
  },
  _privateMethod() {
    console.log(this._privateProp);
  },
  __privateMethodToo() {},
  _privateProp: 'Нельзя получить просто так',
};

function throwIfPrivate(prop) {
  if (prop.indexOf('_') > -1) {
    throw new Error('Нет прав');
  }
}

const proxyProps = new Proxy(props, {
  get(target, prop) {
    throwIfPrivate(prop);

    if (typeof target[prop] === 'function') {
      return target[prop].bind(target);
    }

    return target[prop];
  },
  set(target, prop, value) {
    throwIfPrivate(prop);

    target[prop] = value;
  },
  deleteProperty(target, property) {
    throwIfPrivate(property);
  }
});

proxyProps.getChat();
delete proxyProps.chat;

proxyProps.newProp = 2;
console.log(proxyProps.newProp);

try {
	proxyProps._newPrivateProp = 'Super game';
} catch (error) {
	console.log(error);
}

try {
	delete proxyProps._privateProp;
} catch (error) {
	console.log(error); // Error: Нет прав
}

/*
	* Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/
