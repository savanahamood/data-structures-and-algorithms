const Queue = require('./queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should successfully enqueue into a queue', () => {
    queue.enqueue(5);
    expect(queue.peek()).toBe(5);
  });

  it('should successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('should successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  it('should successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue('apple');
    queue.enqueue('banana');
    expect(queue.peek()).toBe('apple');
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('calling dequeue or peek on an empty queue should raise an exception', () => {
    expect(() => queue.dequeue()).toThrow(Error);
    expect(() => queue.peek()).toThrow(Error);
  });
});