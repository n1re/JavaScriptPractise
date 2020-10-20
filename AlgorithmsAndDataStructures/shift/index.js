'use strict';

const assert = require('assert');

class MyArray {
  constructor(initialSize = 0) {
    this.size = initialSize;
    this.memory = allocate(initialSize);
    this.length = 0;
  }

  inLength(index) {
    if (index >= this.length || index < 0) throw new Error('out of range');
  }

  get(index) {
    this.inLength(index);
    return this.memory[index];
  }

  set(index, value) {
    this.inLength(index);
    return this.memory[index] = value;
  }

  addMemory() {
    const oldMemory = this.memory;
    this.memory = allocate(this.size *= 2);
    Object.keys(oldMemory)
      .forEach(i => this.memory[i] = oldMemory[i]);
  }

  add(value, index) {
    const defaultIndex = index === undefined;
    if (defaultIndex) {
      if (defaultIndex) index = this.length;
      if (this.length === this.size) this.addMemory();
      this.length += 1;
      this.set(index, value);
    } else {
      this.inLength(index);
      if (this.length === this.size) this.addMemory();
      for (let i = this.length - 1; i > index; i--) {
        this.memory[i + 1] = this.memory[i];
      }
      this.length += 1;
      this.set(index, value);
    }

    return this.length;
	}

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    this.inLength(index);
    this.memory[index] = undefined;
    for (let i = index; i < this.length - 1; i++) {
      this.memory[i] = this.memory[i + 1];
    }

    this.memory[this.length - 1] = undefined;

    return this.length -= 1;
  }
}

function allocate(size) {
  const memory = {};

  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }

  return memory;
}

const myArr = new MyArray();
myArr.add('a');
(function() {
  const myArr = new MyArray(2);
  myArr.add('a');
  myArr.add('a');
  myArr.add('a');
  myArr.add('a');
  assert.deepStrictEqual(myArr.memory, { 0: 'a', 1: 'a', 2: 'a', 3: 'a'});
  myArr.add('a');
  assert.deepStrictEqual(
    myArr.memory,
    { 0: 'a', 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: undefined, 6: undefined, 7: undefined }
  );
  myArr.add('a', 0);
  assert.deepStrictEqual(
    myArr.memory,
    { 0: 'a', 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: undefined, 7: undefined }
  );
  myArr.add('a');
  myArr.add('a');
  myArr.add('a', 0);
  assert.deepStrictEqual(
    myArr.memory,
    {
      0: 'a', 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a', 7: 'a',
      8: 'a', 9: undefined, 10: undefined, 11: undefined, 12: undefined, 13: undefined, 14: undefined, 15: undefined,
    }
  );
  myArr.delete(8);
  assert.deepStrictEqual(
    myArr.memory,
    {
      0: 'a', 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a', 7: 'a',
      8: undefined, 9: undefined, 10: undefined, 11: undefined, 12: undefined, 13: undefined, 14: undefined, 15: undefined,
    }
  );
  myArr.delete(0);
  assert.deepStrictEqual(
    myArr.memory,
    {
      0: 'a', 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a', 7: undefined,
      8: undefined, 9: undefined, 10: undefined, 11: undefined, 12: undefined, 13: undefined, 14: undefined, 15: undefined,
    }
  );
  assert.strictEqual(myArr.length, 7);
})();
// myArr.add('b', 0);
// console.log(myArr.memory);
// myArr.add('b', 0);
// console.log(myArr.memory);
