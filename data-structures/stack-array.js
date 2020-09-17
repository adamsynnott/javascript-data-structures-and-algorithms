/**
 * A stack is an ordered collection of items that follows
 * the last in first out (LIFO) principle. This implementation
 * uses an array [] to store items as it is simpler than
 * using an object {}.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.toString();
  }
}

module.exports = Stack;
