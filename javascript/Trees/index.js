
const { BinaryTree, BinarySearchTree } = require('./trees');

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


console.log('preOrder: ', preOrder);
console.log('inOrder: ', inOrder);
console.log('postOrder: ', postOrder);



const treeSearch = new BinarySearchTree();

treeSearch.add(10);
treeSearch.add(5);
treeSearch.add(15);
treeSearch.add(7);
console.log(treeSearch); 

console.log(treeSearch.contains(10)); 
console.log(treeSearch.contains(7)); 
console.log(treeSearch.contains(20)); 
