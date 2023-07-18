const  BinaryTree= require('./trees');

const Node = require('./node');

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();


//console.log('preOrder: ', preOrder);
//console.log('inOrder: ', inOrder);
//console.log('postOrder: ', postOrder);



let tree1 = null;

let Two = new Node(2);
let Two1 = new Node(2);

let Four = new Node(4);
let Five = new Node(5);
let Five1 = new Node(5);

let Six = new Node(6);
let Seven = new Node(7);
let Nine = new Node(9);
let Eleven = new Node(11);

Two.left = Seven;
Two.right = Five;
Seven.left = Two1;
Seven.right = Six;
Five.right = Nine;
Six.left = Five1;
Six.right = Eleven;
Nine.left = Four;

tree1 = new BinaryTree(Two);

const breadthFirstValues = tree1.breadthFirst();

console.log(breadthFirstValues);


//const maximumValue = tree1.findMaximumValue();
//console.log('Maximum value:', maximumValue);
