const Ktree = require('./trees');
const Node = require('./node');

const tree = new Ktree();
const root = new Node(1);
root.children.push(new Node(2));
root.children.push(new Node(3));
root.children.push(new Node(4));
root.children[2].children.push(new Node(5));
root.children[2].children.push(new Node(6));
root.children[2].children.push(new Node(15));
tree.root = root;
console.log(tree.print())
tree.fizzBuzzTree(root);
console.log(tree.print())
