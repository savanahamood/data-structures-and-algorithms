const Linkedlist = require('./lib/linked-list-zip');
/* const ll = new Linkedlist();
 ll.append(1);
ll.append(2); 
ll.append(3);

ll.insertBefore(2,5)
ll.insertAfter(2,5) 
//console.log(ll.print());

//ll.printNthFromLast(-2)
ll.printNthFromLast(4)  

 ll.printNthFromLast(0)
ll.printNthFromLast(6)   */

//console.log(ll.print());

//ll.print()

const L1= new Linkedlist();


L1.append(1)
L1.append(2)
L1.append(3)
L1.append(4)
L1.append(5)

const L2 = new Linkedlist();
L2.append(10)
L2.append(20)
L2.append(30)


const L3 = new Linkedlist();
L3.zipLL(L1, L2);
//console.log(L1,L2)
console.log(L3.print());
//console.log(L1.print());
//console.log(L2.print());

