const Stack = require('./stack');
const Node = require('./Node');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("PseudoQueue is empty");
    }
    return this.stack1.pop();
  }

  isEmpty() {
    return this.stack1.isEmpty();
  }
}

module.exports = PseudoQueue;