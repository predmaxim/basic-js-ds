const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  // return root node of the tree
  root() {
    return this.rootTree
  }

  // add node with data to the tree
  add(data) {
    const _node = { data: data, left: null, right: null }
    this.rootTree = addWithin(this.rootTree, data)

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
    return searchWithin(this.rootTree, data)

    function searchWithin(node, data) {
      if (!node) return false
      if (node.data === data) return true

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data)
    }
  }

  // returns node with the data if node with the data exists in the tree and null otherwise
  find(data) {
    return search(this.rootTree, data)

    function search(node, data) {
      if (!node) return null
      if (node.data === data) return node

      return data < node.data
        ? search(node.left, data)
        : search(node.right, data)
    }
  }

  // removes node with the data from the tree if node with the data exists
  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)

    function removeNode(node, data) {
      if (!node) return null


      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {

        if (!node.left && !node.right) return null

        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right

        while (minFromRight.left) minFromRight = minFromRight.left

        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)

        return node

      }

    }
  }

  // returns minimal value stored in the tree (or null if tree has no nodes)
  min() {
    if (!this.rootTree) return

    let node = this.rootTree
    while (node.left) node = node.left

    return node.data
  }

  // returns maximal value stored in the tree (or null if tree has no nodes)
  max() {
    if (!this.rootTree) return

    let node = this.rootTree
    while (node.right) node = node.right

    return node.data
  }
}



module.exports = {
  BinarySearchTree
};