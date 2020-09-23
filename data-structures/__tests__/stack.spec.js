const ArrayStack = require('../stack-array');
const ObjectStack = require('../stack-object');

const testStack = (Stack) => {
  describe('Stack Array', () => {
    test('initial stack should be empty', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBeTruthy();
    });

    test('push should increment the size', () => {
      const stack = new Stack();
      stack.push(3);
      stack.push(5);
      expect(stack.size()).toBe(2);
    });

    test('pop should return the last element', () => {
      const stack = new Stack();
      stack.push(3);
      stack.push(5);
      expect(stack.pop()).toBe(5);
      expect(stack.size()).toBe(1);
    });

    test('clear should empty the stack', () => {
      const stack = new Stack();
      stack.push(3);
      stack.push(5);
      stack.clear();
      expect(stack.size()).toBe(0);
    });

    test('peek should not affect the size', () => {
      const stack = new Stack();
      stack.push(3);
      stack.push(5);
      expect(stack.peek()).toBe(5);
      expect(stack.size()).toBe(2);
    });

    test('initial stack toString call should return an empty string', () => {
      const stack = new Stack();
      expect(stack.toString()).toBe('');
    });

    test('stack toString call should return comma separated values in order', () => {
      const stack = new Stack();
      stack.push(3);
      stack.push(5);
      stack.push(8);
      expect(stack.toString()).toBe('3,5,8');
    });
  });
};

testStack(ArrayStack);
testStack(ObjectStack);
