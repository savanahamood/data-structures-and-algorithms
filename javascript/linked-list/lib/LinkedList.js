'use strict';
const Node = require('./Node');
class Linkedlist {
    constructor() {
        this.head = null;
        //this.tail=null;
        //this.size=
    }
    insert(value) {
        const newNode = new Node(value);
      if(!this.head){
          this.head = newNode;
          return this;
      }
      let currentNode=this.head;
      while(currentNode.next){
        currentNode=currentNode.next;
      }
      currentNode.next=newNode;
      return this;
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
  }}
module.exports=Linkedlist;