What is a tree?
- DS that consists of nodes in a parent/child relationship

Tree Terms
- Root: The top node in a tree
- Child: A node directly connected to another node when moving away from the Root.
- Siblings: group of nodes with the same parent
- Leaf: A node with no children
- Edge: the connection between one node and another.



Trees are used in 

- HTML DOM
- nested elements
- network routing
- abstract syntax tree
- AI, machine learning
- Folders in an OS
- json


Generic Tree
- can have more than 2 children
- no real rules


Binary Tree
- can't have more than two children 
- sorted, less than node is stored to the left, greater than is stored to the right of the root node

How BSTS work 
- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent 
- Every node to the right of the parent node is always greater than the parent


Inserting a Node
- create new node
- starting at root
- check root, if not the root now becomes that node
- if root, check the value, greater than to the right, less than to the left
- if greater
    - check nodes to the right, if nodes continue the steps
- if less
    - check nodes to the left, if nodes continue the steps


Finding a Node in a BST
- start at root
- check if root, if not, done searching
- if root, check value, if equal return node
- if not, see if value is greater or less than root
- if greater
    - check to see if there is a node to the right
    - if there is, move to that node and repeat these steps
    - if there is not, done searching 
-if less
    - check to see if there is a node to the left
        - if true, move to that node and repeat these steps
        - if false, done!


Tree Traversal
- Breadth-first Search
    - Steps
    - Create a queue (can be array) and a variable to store the values of nodes visited
    - Place the root node in the queue
    - Loop as long as there is anything  in the queue
        - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        - if there is a left property on the node dequeued - add it to the queue
- Depth-First Search
    - InOrder
    - PostOrder
    - PreOrder
        - create a variable to store the values of nodes visited 
        - store the root of the BST in a variable called current
        - write a helper function which accepts a node
