/**
 * A stack is an ordered collection of items that follows
 * the last in first out (LIFO) principle. This implementation
 * uses a WeakMap to store items so items are truly private members
 * of the class.
 */
const items = new WeakMap();
class WeakMapStack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    return s.pop();
  }

  peek() {
    const s = items.get(this);
    return s[s.length - 1];
  }

  isEmpty() {
    const s = items.get(this);
    return s.length === 0;
  }

  clear() {
    const s = items.get(this);
    while (!this.isEmpty()) {
      s.pop();
    }
  }

  size() {
    const s = items.get(this);
    return s.length;
  }

  toString() {
    const s = items.get(this);
    return s.toString();
  }
}

module.exports = WeakMapStack;
