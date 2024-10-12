class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value < value) {
        return this.search(root.right, value);
      } else {
        return this.search(root.left, value);
      }
    }
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  min(root) {
    if (root.left) {
      this.min(root.left);
    } else {
      return root.value;
    }
  }
  max(root) {
    if (root.right) {
      this.max(root.right);
    } else {
      return root.value;
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // if it does not have both left and right child
      if (!root.left && !root.right) {
        return null;
      }
      // if it does not have left or right child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // if it does have both left and right child
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      var curr = queue.shift();
      console.log(curr.value);
      if (curr.right) {
        queue.push(curr.right);
      }
      if (curr.left) {
        queue.push(curr.left);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const binary = new BinarySearchTree();
// console.log(binary.isEmpty());
// binary.insert(66);
// console.log(binary.search(binary.root, 66));
// console.log(binary.search(binary.root, 77));
binary.insert(10);
binary.insert(5);
binary.insert(15);
binary.insert(3);
binary.levelOrder();

binary.delete(10);
binary.levelOrder();
