/**
 * A queue is an ordered collection of items that follows
 * the first in first out (FIFO) principle. This implementation
 * uses an object {} to store items as it is more performant than
 * using an array [].
 */
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(item) {
    this.items[this.count] = item;
    this.count += 1;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount += 1;
      return item;
    }
    return false;
  }

  peek() {
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    while (!this.isEmpty()) {
      this.dequeue();
    }
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let queueString = `${this.items[0]}`;
    for (let i = this.lowestCount + 1; i < this.count; i += 1) {
      queueString = `${queueString},${this.items[i]}`;
    }
    return queueString;
  }
}

module.exports = Queue;
