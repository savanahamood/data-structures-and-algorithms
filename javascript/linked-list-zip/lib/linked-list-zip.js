'use strict';
const Node = require('./node');
class Linkedlist {
    constructor() {
        this.head = null;
        // this.tail = null;
        // this.size=
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            //if the linkedlist is empty
            this.head = newNode;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this;
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
    printNthFromLast(n) {
        let firstPointer = this.head;
        let secondPointer = this.head;
        let count = 0;
        if (n<0) {
            console.log(`${n} is not possitive`);
          }else {
        if (this.head === null) {
            console.log(`empty linked list`);
          }

        if (this.head !== null) {
          while (count <= n) {
            if (secondPointer === null) {
              console.log(`${n} is greater than the number of nodes in the list`);
              return;
            }
            secondPointer = secondPointer.next;
            count++;
          }
          if (secondPointer === null) {
            if (this.head !== null) {
              console.log(`Node no. ${n} from last is ${this.head.value}`);
            }
          } else {
            while (secondPointer !== null) {
              firstPointer = firstPointer.next;
              secondPointer = secondPointer.next;
            }
            console.log(`Node no. ${n} from last is ${firstPointer.value}`);
          }
        }
      }}
      zipLL(l1, l2) {
        if (!l1.head) {
            return l2;
        }
        if (!l2.head) {
            return l1;
        }
    
        let current1 = l1.head;
        let current2 = l2.head;
        let temp1, temp2;
    
        while (current1 && current2) {
            temp1 = current1.next;
            temp2 = current2.next;
    
            current1.next = current2;
            current2.next = temp1;
    
            current1 = temp1;
            current2 = temp2;
        }
    
        this.head = l1.head;

        return this;    
     }
//code with anew list but O(n) of space com.
   /*  zipLL(l1, l2) {
        if (!l1.head) {
            return l2;
        }
        if (!l2.head) {
            return l1;
        }
    
        let l3 = new LinkedList();
        let current1 = l1.head;
        let current2 = l2.head;
        let current3 = null;
    
        while (current1 && current2) {
            if (current3) {
                current3.next = new Node(current1.value);
                current3 = current3.next;
                current3.next = new Node(current2.value);
                current3 = current3.next;
            } else {
                l3.head = new Node(current1.value);
                current3 = l3.head;
                current3.next = new Node(current2.value);
                current3 = current3.next;
            }
    
            current1 = current1.next;
            current2 = current2.next;
        }
    
        if (current1) {
            current3.next = current1;
        }
        if (current2) {
            current3.next = current2;
        }
    
        this.head = l3.head; 

        return this;    
     } */


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

module.exports = Linkedlist;