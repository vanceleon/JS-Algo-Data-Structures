What is a linked list?
Similar to array 
A DS that contains a head, tail and length property

Linked lists consist of nodes, and each node has a value and a pointer to another node or null

Lists vs Array

List 
Don't have indices
Connected via nodes with a next pointer
random access is not allowed 


Array
Indexed in order
Insertion and deletion can be expensive 
Can quickly be accessed at a specific index

pushing pseudocode
- accept a value 
- create a new node using the value passed to the function 
- if there is no head property on the list , set the head and tail to be the newly created node
- Otherwise set the next property on the list to be the newly created node 
- Increment the length by one 

Popping
- removing a node from the end of the Linked List!
- need to be able to tranverse list

pseudocode 
- if there are no nodes in the list, return undefined
- loop through the list until you reach the tail
- set the next property of the 2nd to last node to be null
- set the tail to be the 2nd to last node 
- decrement the length of the list by 1
- return the value of the node removed


Shifting 
- removing a new node from the beginning of the Linked List

pseudocode
- if there are no nodes, return undefined
- store the current head property in a variable
- set the head property to be the current head's next property
- decrement the length by 1
- Return the value of the node removed


Unshifting
- adding a new node to the beginning of the Linked List
pseudocode
- accept a value
- create new node using val passed to the function 
- if no head set the head and tail to newly created node
- set the newly created node's property to be the current head property on the list
- set the head property on the list to be that newly created node
- increment the length of the list 
- return list