'use strict';
const Node = require('./node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    findMaximumValue() {
        if (!this.root) {
            throw new Error("Binary Tree is empty.");
        }

        let max = this.root.value;

        const traverse = (node) => {
            if (node.value > max) {
                max = node.value;
            }
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };

        traverse(this.root);

        return max;
    }



    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}






module.exports = BinaryTree
