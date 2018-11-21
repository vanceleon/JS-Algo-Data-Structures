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


Get
- getting a particular node in the list 

PS code
- Accept an index
- if the index is less than zero or greater than or equal to the length of the list return null.
- loop through the list until reach index and return the node at that specific index



Set
- change the value of a node based on it's position in the Linked List

PS code
- accept value and index
- use get function to find the specific node
- if not found return false
- if found, set the value of that node to be the value passed to the function and return true


insert
- function that is inserting into the list

PS code
- if the index is less than zero or greater than the length, return false
- if the index is the same as the length, push a new node to the end of the list
- if the index is 0, unshift a new node to the start of the list 
- otherwise, using the get method, access the node at the index -1
- set the next property on that node to be the new node
- set the next property on the new node to be the previous next 
- increment the length
- return true

Remove 
- removing a node from the linked list at a specific position

PS code
- if the index is less than zero or greater than return undefined
- if the index is the same as length-1, pop
- if the index is zero, shift
- otherwise use get method, access then node at the index - 1
- set the next property on that node to be the next of the next node 
- decrement the length
- return the value of the node removed


Reverse 
- reversing the order of the list 

PSCode 
- swap the head and the tail 
- create a variable called next
- create variable prev
- create var node and initialize it to the head property
- Loop through the list
- set next to be the next property on whatever prev is
- set prev to be the value of the node variable
- Set the node variable to be the value fo the next variable
- 