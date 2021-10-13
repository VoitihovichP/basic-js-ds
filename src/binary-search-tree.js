const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.val = null;
  }
  root() {
    if(this.val === null) {
      return null;
    } else {
      return this.val;
    }
  }

  add(data) {
    this.val = addWithin(this.val, data);

    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.val, data) 

    function searchIn(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return data < node.data ?
        searchIn(node.left, data) :
        searchIn(node.right, data);
    }
  }

  find(data) {
    return returnIn(this.val, data) 

    function returnIn(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return data < node.data ?
        returnIn(node.left, data) :
        returnIn(node.right, data);
    }
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    /* this.val = removeNode(this.val, data);

    function removeNode(node, data) {
      // если такого узла нет
      if(!node) {
        return null;
      }
      // если data больше либо меньше
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        //если нет обоих потомков(тюе это лист)
        if(!node.left && !node.right) {
          return null;
        }

        //если нет левого потомка
        if(!node.left) {
          node = node.right;
          return node;
        }

        // если нет правого потомка
        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.value

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    } */
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}