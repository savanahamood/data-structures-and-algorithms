const BinaryTree = require('./trees');
const Node = require('./node');

describe('BinaryTree', () => {
  describe('findMaximumValue', () => {
    test('should find the maximum value in a non-empty binary tree', () => {
      // Create the binary tree with some values
      const rootNode = new Node(10);
      const leftNode = new Node(5);
      const rightNode = new Node(15);
      const tree = new BinaryTree(rootNode);
      rootNode.left = leftNode;
      rootNode.right = rightNode;

      const maximumValue = tree.findMaximumValue();

      expect(maximumValue).toBe(15);
    });

    test('should throw an error for an empty binary tree', () => {
      const tree = new BinaryTree();

      expect(() => tree.findMaximumValue()).toThrow('Binary Tree is empty.');
    });
  });

  // Add more tests for other methods if needed
});