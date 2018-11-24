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
