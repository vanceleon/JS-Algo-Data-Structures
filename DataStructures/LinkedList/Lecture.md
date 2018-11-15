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