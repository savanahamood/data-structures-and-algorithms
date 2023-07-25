const Node = require('./node');

class Ktree {
  constructor() {
    this.root = null;
  }

  fizzBuzzTree(node) {
    if (!node) return null;

    let newValue = "";
    if (node.value % 3 === 0) {
      newValue=newValue+"Fizz";
    }
    if (node.value % 5 === 0) {
      newValue=newValue+ "Buzz";
    }

    if (!newValue) {
      node.value = node.value.toString();
    } else {
      node.value = newValue;
    }
    if (node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        this.fizzBuzzTree(node.children[i], newValue);
      }
    }
  }
  print(node = this.root) {
    let output='';
    output += node.value + '\n';
    const num = node.children.length;
    for (let i = 0; i < num; i++) {
        output += this.print(node.children[i]);
    } 
    return output;
    }
}

module.exports = Ktree;