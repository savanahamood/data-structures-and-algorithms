class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(key, value) {
      const newNode = new Node(key, value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    find(key) {
      let current = this.head;
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
      return undefined;
    }
  
    contains(key) {
      return this.find(key) !== undefined;
    }
  
    keys() {
      const keysArray = [];
      let current = this.head;
      while (current) {
        keysArray.push(current.key);
        current = current.next;
      }
      return keysArray;
    }
  }
  
  class Hashtable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = new LinkedList();
      }
      const linkedList = this.table[index];
      if (linkedList.contains(key)) {
        linkedList.find(key).value = value;
      } else {
        linkedList.append(key, value);
      }
    }
  
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        return this.table[index].find(key);
      }
      return undefined;
    }
  
    has(key) {
      const index = this.hash(key);
      return this.table[index] && this.table[index].contains(key);
    }
  
    keys() {
      const keysArray = [];
      for (let i = 0; i < this.size; i++) {
        if (this.table[i]) {
          keysArray.push(...this.table[i].keys());
        }
      }
      return keysArray;
    }
  }
  
  const myHashtable = new Hashtable(10);
  myHashtable.set("name", "savana");
  myHashtable.set("age", 30);
  
  console.log(myHashtable.get("name")); 
  console.log(myHashtable.has("age"));  
  //console.log(myHashtable.has("fullname"));  
  console.log(myHashtable.keys());      
  
  module.exports = Hashtable;
