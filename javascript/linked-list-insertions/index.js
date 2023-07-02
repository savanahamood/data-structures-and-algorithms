'use strict';
const LinkedList = require('./lib/linked-list-insertions');
const ll = new LinkedList();
ll.append(2);
ll.append(3);
ll.append(1);
console.log(ll);
ll.insertBefore(2,5)
ll.insertAfter(2,5)
console.log(ll.print());