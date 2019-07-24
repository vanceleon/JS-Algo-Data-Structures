class BinarySearchTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    const node = new BinarySearchTree(data);
    let current = this;
    while (true) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return node;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = node;
          return node;
        } else {
          current = current.right;
        }
      }
    }
  }
}
const binarySearchTree = new BinarySearchTree('d');
binarySearchTree.insert('k');
binarySearchTree.insert('f');
binarySearchTree.insert('g');
binarySearchTree.insert('z');

console.log(binarySearchTree);
