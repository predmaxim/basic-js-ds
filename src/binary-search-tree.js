const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // return root node of the tree
  root() {
    return this.root = { data: null, left: null, right: null }
  }

  // add node with data to the tree
  add(data) {
    const _node = { data: data, left: null, right: null }
    this.root = addWithin(this.root, data)

    function addWithin(node, data) {
      if (!node) return _node
      if (node.data === data) return node

      data < node.data
        ? node.left = addWithin(node.left, data)
        : node.right = addWithin(node.right, data)
        
      return node
    }

  }

  // returns true if node with the data exists in the tree and false otherwise 
  has(data) {
    return searchWithin(this.root, data)

    function searchWithin(node, data) {
      if (!node) return false
      if (node.data === data) return true
      // if (data === null) return 'root'

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data)
    }
  }

  // returns node with the data if node with the data exists in the tree and null otherwise
  find(data) {

  }

  // removes node with the data from the tree if node with the data exists
  remove(data) {
    this.root = removeNode(this.root, data)

    function removeNode(node, data) {
      if (!node || !node.left && !node.left) return null
      if (data < node.data) node.left = addWithin(node.left, data)
      if (data > node.data) node.right = addWithin(node.right, data)
      if (!node.left) node = node.right
      if (!node.right) node = node.left

      let minFromRight = node.right

      while (minFromRight.left) {
        minFromRight = minFromRight.left
      }

      node.data = minFromRight.data
      node.right = removeNode(node.right, minFromRight.data)

      return node
    }
  }

  // returns minimal value stored in the tree (or null if tree has no nodes)
  min() {
    if (!this.root) return

    let node = this.root

    while (node.left) {
      node = node.left
    }

    return node.data
  }

  // returns maximal value stored in the tree (or null if tree has no nodes)
  max() {
    if (!this.root) return

    let node = this.root

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}


const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);


module.exports = {
  BinarySearchTree
};