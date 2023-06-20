"use strict";
const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null;
  }
 
    
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
      }
      current.next = newNode;
    }
}


insertBefore(value, newValue){
    const newNode = new Node(newValue);
    if (this.head === null) {
        throw new Error('empty list');
    } else if (this.head.value === value) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
    }
      if (current.next=== null) {
        throw new Error('can not find the value');
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
        throw new Error('empty list');
    }
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (current === null) {
        throw new Error('can not find the value');
    }
    newNode.next = current.next;
    current.next = newNode;
}

 print(){
let currentNode = this.head;
let result = '';
while (currentNode) {
  result += `{ ${currentNode.value} } -> `;
  currentNode = currentNode.next;
}
result += 'NULL';
return result;
} 
}
module.exports = LinkedList;