const Ktree = require('./trees');
const Node = require('./node');

describe('FizzBuzz Tree', () => {
  test('Should modify tree values correctly', () => {
    const tree = new Ktree();
    const root = new Node(1);
    root.children.push(new Node(2));
    root.children.push(new Node(3));
    root.children.push(new Node(4));
    root.children[2].children.push(new Node(5));
    root.children[2].children.push(new Node(6));
    root.children[2].children.push(new Node(15));
    tree.root = root;

    const expectedOutput =
      '1\n' +
      '2\n' +
      'Fizz\n' +
      '4\n' +
      'Buzz\n' +
      'Fizz\n' +
      'FizzBuzz\n';
    
    tree.fizzBuzzTree(tree.root);
    expect(tree.print()).toEqual(expectedOutput);
  });
});