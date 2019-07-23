// To do: write an insert method that handles the sorting on insertion instead of having to manually code it out.

class BinarySearchTree {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

    insert(data) {
        let node = new BinarySearchTree(data);
        if (!this.data) {
            this.data = node;
            return this;
        } else {
            let currentNode = this.data;
            while (true) {
                if(currentNode.data === node.data) return undefined;
                console.log("1",currentNode)
                if(node.data < currentNode.data) {
                    console.log("2",currentNode)
                    if(currentNode.left === null) {
                        currentNode.left = node;
                        return this;
                    }else {
                        currentNode = currentNode.left;
                        console.log("3",currentNode)
                    }
                }else if (node.data > currentNode.data) {
                    if(currentNode.right === null) {
                        console.log("4",currentNode)
                        currentNode.right = node;
                        return this;
                    }else {
                        currentNode = currentNode.right;
                        console.log("5",currentNode)
                    }
                }
            }
        }
    }
}
  




const binarySearchTree = new BinarySearchTree('d');
console.log("b1",binarySearchTree)
binarySearchTree.left = new BinarySearchTree('b');
console.log("b2",binarySearchTree)
binarySearchTree.right = new BinarySearchTree('l');
console.log("b3",binarySearchTree)
binarySearchTree.left.left = new BinarySearchTree('a');
console.log("b4",binarySearchTree)
binarySearchTree.insert('k');  
binarySearchTree.insert('f');  
binarySearchTree.insert('g');  
binarySearchTree.insert('z');  


  console.log(binarySearchTree);