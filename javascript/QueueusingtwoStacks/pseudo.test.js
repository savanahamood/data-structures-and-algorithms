const PseudoQueue = require('./queue');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('should enqueue values using a first-in, first-out approach', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    pseudoQueue.enqueue(20);

    expect(pseudoQueue.dequeue()).toBe(10);
    expect(pseudoQueue.dequeue()).toBe(15);
    expect(pseudoQueue.dequeue()).toBe(20);
    expect(pseudoQueue.isEmpty()).toBe(true);
  });

  it('should throw an error when dequeuing from an empty PseudoQueue', () => {
    expect(() => {
      pseudoQueue.dequeue();
    }).toThrow('PseudoQueue is empty');
  });

  it('should correctly indicate whether the PseudoQueue is empty or not', () => {
    expect(pseudoQueue.isEmpty()).toBe(true);

    pseudoQueue.enqueue(10);
    expect(pseudoQueue.isEmpty()).toBe(false);

    pseudoQueue.dequeue();
    expect(pseudoQueue.isEmpty()).toBe(true);
  });
});