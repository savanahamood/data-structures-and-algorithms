const Stack = require('./stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should successfully push onto a stack', () => {
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });

  it('should successfully push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('should successfully pop off the stack', () => {
    stack.push(10);
    stack.push(20);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  it('should successfully empty a stack after multiple pops', () => {
    stack.push(5);
    stack.push(10);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should successfully peek the next item on the stack', () => {
    stack.push('apple');
    stack.push('banana');
    expect(stack.peek()).toBe('banana');
  });

  it('should successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('calling pop or peek on an empty stack should raise an exception', () => {
    expect(() => stack.pop()).toThrow(Error);
    expect(() => stack.peek()).toThrow(Error);
  });
});