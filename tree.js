'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
}

class KaryNode {
  constructor(value, k) {
    this.value = valuel;
    this.k = k;

    this.children = [];
    // in js this works
    this.children = [];
    // other languages maybe - also, this is valid js
    // this.children = new Array(k).fill(null);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    // let results = []
    // recursive helper function
    const traverse = (node) => {
      // base case - DO THE THING
      console.log(node.value);

      // recursive cases ONE WAY 
      // looks left if there is left node and serves as an "eject" if no left node exists
      if (node.left) {
        traverse(node.left);
      }

      // looks right if there is right node and serves as an "eject" if no right node exists
      if (node.right) {
        traverse(node.right);
      }

      // recursive cases ANOTHER WAY 
      // if (node.left) traverse(node.left);
      // if (node.right) traverse(node.right);
    }
      // start the recursive "party"
      traverse(this.root);
  }

  inOrder(){

    // define recursive function
    traverse = (node) => {
      if(node.left) traverse(node.left);
      // DO THE THING IN ORDER
      console.log(node.value);
      if(node.right) traverse(node.right);
    }
    // get the recursive party started
    traverse(this.root);
  }

  // breadth traversal first
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// expect console logs in specific order: 
tree.preOrder();

//tree.postOrder(); 
