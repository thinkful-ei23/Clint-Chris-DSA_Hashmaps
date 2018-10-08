'use strict';

const LinkedList = require('./LinkedList');

class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined) {
      throw new Error('Key error');
    }
    let currentNode = this._slots[index].head;
    if (currentNode !== null && currentNode.value.key === key) {
      return currentNode;
    }
    while (currentNode.next !== null) {
      if (currentNode.next.value.key === key) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    throw new Error('Key error');
  }

  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    // console.log('this._capacity = ', this._capacity);

    const index = this._findSlot(key);
    // console.log(`attempting to insert ${key}:${value} into...`);
    // console.log('slot:', slot);
    if (this._slots[index]) {
      if (this._slots[index].head.value.key === key) {
        this.remove(key);
        this._slots[index].insertFirst({key, value});
      } else {
        this._slots[index].insertLast({key, value});
      }
    } else {
      let newList = new LinkedList();
      newList.insertFirst({key, value});
      this._slots[index] = newList;
    }
    this.length++;
  }

  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    let currentNode = this._slots[index].head;

    if (currentNode.next === null & currentNode.value.key === key) {
      this._slots[index].remove(currentNode.value);
    }
    while (currentNode.next !== null) {
      if (currentNode.value.key === key) {
        this._slots[index].remove(currentNode.value);
      }
      currentNode = currentNode.next;
    }
    this.length--;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    // console.log(`hash for ${key} = `, hash);
    const index = hash % this._capacity;
    // console.log(`index for ${key} = `, index);
    return index;

    // const index = start % this._capacity;
    // const slot = this._slots[index];
    // if (slot === undefined) {
    //   this._slots[index] = new LinkedList();
    // }
    //   console.log('index', index);
    //   return index;
  }

  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        let currNode = slot.head;
        let prevNode = slot.head;
        while (currNode !== null) {
          prevNode = currNode;
          this.set(prevNode.value.key, prevNode.value.value);
          currNode = currNode.next;
        }
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;