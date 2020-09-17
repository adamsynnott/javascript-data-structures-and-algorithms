const Queue = require('../queue-object');

describe('Queue', () => {
  test('size should return the accurate size as items are added and removed', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.enqueue('item-1');
    queue.enqueue('item-2');
    queue.enqueue('item-3');
    expect(queue.size()).toBe(3);
    queue.dequeue();
    expect(queue.size()).toBe(2);
    queue.clear();
    expect(queue.size()).toBe(0);
  });

  test('dequeue should return false on an empty queue', () => {
    const queue = new Queue();
    const dequeueItem = queue.dequeue();
    expect(dequeueItem).toBeFalsy();
  });

  test('peek should return the first item from queue but not affect the size', () => {
    const queue = new Queue();
    queue.enqueue('item-1');
    queue.enqueue('item-2');
    queue.enqueue('item-3');
    expect(queue.peek()).toBe('item-1');
    expect(queue.size()).toBe(3);
  });

  test('toString should return an empty string with an empty queue', () => {
    const queue = new Queue();
    expect(queue.toString()).toBe('');
  });

  test('toString should return items first to last with items', () => {
    const queue = new Queue();
    queue.enqueue('item-1');
    queue.enqueue('item-2');
    queue.enqueue('item-3');
    expect(queue.toString()).toBe('item-1,item-2,item-3');
  });
});
