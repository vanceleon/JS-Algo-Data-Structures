What are they?
- only difference from a single linked list is except every node has another pointer, to the previous node  
- draw back, uses more memory 

Pushing 
- adding a node to the end of Doubly Linked

pscode
- create new node
- check edge cases, if the head property is null set the head and tail to be the newly created node
- if not, set the next property on the tail to be that node
- set the previous property on the newly created node to be the tail
- increment the length
- return the list

pop
- remove node at the end of the list

pscode 
- if there is no head, return undefined
- store the current tail in a variable to return later
- if the lengthh is 1, set the head and the tail to be null
- update the tail to be the previous Node. 
- set the newTail's next to null
- decrement the length
- return the value removed

shifting
- removing a node from the beginning of the doubly linked list

pscode 
- if length 0 return undefine
- store current head property in a variable (we'll call it old head)
- if the length is one
    - set the head to be null 
    - set the tail to be null 

- update the head to be the next of the old head
- set the head's prev property to null 
- set the old head's next to null 
- decrement the length
- return the old head

unshifting
- adding a node to the beginning of list

pscode
- create a new node with the value passed to the function 
- if the length is 0
    - set the head to be the new node
    - set the tail to be the new node 
- Otherwise 
    - set the prev property on the head of the list to be the new node
    - set the next property on the new node to be the head property
    - update the head to be the new node 
- increment length

Get 
- access nodes in a list

pscode
- if the index is less than 0 or greater or equal to the length, return null
- if the index is less than or equal to half the length of the list 
    - loop through the list starting from the head and loop towards the middle
    - return return the node once it is found 
- if the index is greater than half the length of the list 
    - loop through the list starting from the tail and loop towards the middle
    - return the node once it is found

set
- replacing the value of a node 

pscode
- create var which is the result of the get method at the index passed to the function
    - if the get method return a valid node, set the value of that node to be the value passed to the function
    - return true

#insert

- insert node into list

Pseudo 
- if the index is less than zero or greater than or equal to the length return false
- if the index is 0, **unshift**
- if the index is the same as the length, push
- use the **get** method to access the index - 1
- set the next and prev properties on thet correct nodes to link 
everything together
- increment the length
- return true

#Remove 
- remove node from the list

*pseudo*
- if the index is less than zero or greater than or equal to the length return undefined 
- if the index is 0, shift 
- if the index is the same as the length - 1, pop 
- use the get method to retrieve the item to be removed 
- update the next and prev properties to remove the found node from the list 
- set next and prev to null on the found node
- decrement the length
- return  removed node  
