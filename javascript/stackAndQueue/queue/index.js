const Queue = require('./queue');

const newQueue = new Queue();


newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);


console.log(newQueue.peek());

newQueue.dequeue();
console.log(newQueue.peek());

