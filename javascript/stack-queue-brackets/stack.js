
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }

    validatebrackets(str) {
      let stack = new Stack();
      let brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
      };
    
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
    
        if (char === '(' || char === '[' || char === '{') {
          stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
          if (stack.isEmpty()) {
            return false; 
          }
          let top = stack.pop();
          if (char !== brackets[top]) {
            return false; 
          }
        }
      }
    
      return stack.isEmpty(); 
    }

    


  }
  
  module.exports = Stack;