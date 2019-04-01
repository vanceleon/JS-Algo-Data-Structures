What is a Binary Heap?
- Very similar to a binary search tree, but with some different rules
- in a maxBinary Heap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes

Max Binary Heap
- Each parent has at most two child nodes
- the value of each parent node is always greater than its child nodes
- in a max binary heap the parent is greater than the children, but there are no guarantees between sibling nodes. 
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

Binary Heaps are used to implement Priority Queues
    which are very commonly used DS

Inserting in a Binary Heap
- add to the end of the heap 
- then bubble up

Pseudocode
- Push the value into the values property on the heap
- Bubble the value up to its correct spot
    - create a variable called index which is the length of the values property - 1
    - create a variable called parent index which is the floor of (index - 1) / 2
    - Keep looping as long as the values element at the parent Index is less than the values element at the child index
        - swap the value of the values element at the parent index with the value of the element property at the child index
        - set the index to be the parent index, and start over!

Removing from a Heap 
- Remove the root
- Replace with the most recently added 
- adjust (sink down)
    - the procedure for deleting the root form the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle-down....etc).

Psuedocode
- Swap the first value in the values property with last value
- Pop from values property, so you can return the value at the end. 
- Have the new root "sink down" to the correct spot...
    - Your parent index starts at 0 (the root)
    - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    - if the left or right child is greater than the element...swap. If both left and right children are greater, swap with the largest child
    - the child index you swapped to now becomes the new parent index. 
    - keep looping and swapping until neither child is larger than the element. 
    - Return the old root!



Priority Queue 
- Write a min Binary Heap - lower number means higher priority
- Each node has a value and a priority. Use the priority to build the heap. 
- Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
- Dequeue method removes root element, returns it, and rearranges heap using priority


Big O of Heap
- searching 
- insertion
- delete


Binary heaps are either Max or MinBinaryheaps with parents either being smaller or larger than their children