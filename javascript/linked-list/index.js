'use strict';

/* class LinkedList {

}

module.exports = LinkedList;
 */
const Linkedlist=require('./lib/LinkedList');
const ll=new Linkedlist();
ll.insert("a");
ll.insert("b");
ll.insert("c");

//console.log(ll);
console.log(ll.print());

