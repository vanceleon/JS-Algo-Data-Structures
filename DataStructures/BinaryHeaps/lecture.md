What is a Binary Heap?
- Very similar to a binary search tree, but with some different rules
- in a maxBinary Heap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes

Max Binary Heap
- Each parent has at most two child nodes
- the value of each parent node is always greater than its child nodes
- in a max binary heap the paretn is greater than the children, but there are no guarantees between sibling nodes. 
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