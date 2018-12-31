class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;

    }
    insert(value){
        let newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this;
        }  else{
            let current = this.root;
            while (true ){
                if(value === current.value) return undefined; //this is a dup check, could also figure out a count for dups
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if(value > current.value){
                    if (current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
}





let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(8);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);


tree.insert(5);
tree.insert(16);
console.log(tree);