/**
 * A stack is an ordered collection of items that follows
 * the last in first out (LIFO) principle. This implementation
 * uses an object {} to store items as it is more performant than
 * using an array [].
 */
class ObjectStack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (!this.isEmpty()) {
      this.count -= 1;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
    return undefined;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.count - 1];
    }
    return undefined;
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objectString = `${this.items[0]}`;
    for (let i = 1; i < Object.keys(this.items).length; i += 1) {
      objectString = `${objectString},${this.items[i]}`;
    }
    return objectString;
  }
}

module.exports = ObjectStack;
