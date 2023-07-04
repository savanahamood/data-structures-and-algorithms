const PseudoQueue = require('./queue');

const pseudoQueue = new PseudoQueue();

pseudoQueue.enqueue(10);
pseudoQueue.enqueue(20);
pseudoQueue.enqueue(30);
pseudoQueue.enqueue(40);
pseudoQueue.enqueue(50);


console.log(pseudoQueue.dequeue()); 
console.log(pseudoQueue.dequeue()); 
console.log(pseudoQueue); 