#Stack

#Pushing pseudocode

- the function should accept a value
- create a new node with that value
- if there are no node in the stack, set the first and last property to be the newly created node
- if there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the onde to the previously created variable
- increment the size of the stack by 1


#Pop

- if there are no nodes in the stack, return null
- create a temporary variable to store the first property on the stack 
- if there is only 1 node, set the first and last property to be null
- if there is more than one node, set the first property to be the next property on the current first
- decrement the size by 1 
- return the value of the node removed


#What is a Queue?

- FIFO DS
- waiting in line
- uploading resources
- Background tasks
- printing / Task processing

#Enqueue 
- This function accepts some value 
- Create a new node using that value passed to the function
- if there are no node in the queue, set this node to be the first and last property of the queue.


#dequeue
- if there is no first prop, return nul
- store the first property in a variable
- see if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null 
- if there is more than 1 node, set the first property to be the next property of the first
- decrement size 
- return the value of the node dequeued
