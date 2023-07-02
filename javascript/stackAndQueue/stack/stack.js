const Node = require('./Node.js');

class Stack {
    constructor() {
      this.top = null;
    }
  
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
  
      const poppedValue = this.top.value;
      this.top = this.top.next;
      return poppedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
  
      return this.top.value;
    }
  
    isEmpty() {
      return this.top === null;
    }
  }
  module.exports = Stack;  