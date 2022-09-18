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
    return this.value === null;
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
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
}

const binary = new BinarySearchTree();
console.log(binary.isEmpty());
console.log(binary.search(66));
