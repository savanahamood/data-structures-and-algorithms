const BinaryTree = require('./trees');
const Node = require('./node');

describe('BinaryTree', () => {
  test('breadthFirst should return the values in breadth-first order', () => {
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

    let tree = new BinaryTree(Two);
    const breadthFirstValues = tree.breadthFirst();

    expect(breadthFirstValues).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});