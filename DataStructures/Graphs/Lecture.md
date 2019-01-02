What are graphs?
- a graph DS consists of finite set of vertices or nodes or points
- together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.


Uses for Graphs
- Social Networks
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- EVERYWHERE
- Recommendations
    - People also watched
    - you might also like...
    - People you might know
    - Frequently bought with

Types of Graphs
- Vertex: a node
- Edge: connection between nodes
- Weighted/UnWeighted: values assigned to distances between vertices
- directed/Undirected: directions assigned to distance between vertices

Undirected Graph 
- no clear direction in the graph
- bilateral directions
    - friends on FaceBook

Directed Graph
- edges dictate the direction of the graph
    - instagram or twitter

Weighted Graph 
- values that are assigned to the edges, give strong to weak relationships

UnWeigthed Graph 
- no strength in relationships


Adjacency List 
- can take up less space (in sparse graphs)
- faster to iterate over all edges 
- can be slower to lookup specific edge

Adjacency Matrix
- Takes up more space (in sparse graphs)
- slower to iterate over all edges 
- faster to lookup specific edge

Adjacency List 
- is the most used 
- most data in the world tends to lend itself to sparser and/or larger graphs


Adding a Vertex
- write a method called addVertex, which accepts a name of a vertex
- it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

Adding an edge 
- this function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices in this basic implementation

Removing an edge
- function should accept two vertices, we'll call them vertex1 and vertex2
- the function should reassign the key of vertex1 to be an array that does not contain vertex2
- the function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

Removing a vertex
- the function should accept a vertex to remove
- the function should loop as long as there are any other vertices in the adjacency list for that vertex
- inside of the loop, call removeEdge() with the vertex being removed and any values in the adjacency list for that vertex
- delete the key in the adjacency list for that vertex


#Graph Traversal

Use cases
- Peer to peer networking 
- web crawlers 
- finding "closest" matches/recommendations
- Shortest path problems 
    - GPS Navigation
    - Solving mazes
    - AI (shortest path to win the game)


#DFS Pseudocode **
- if vertex is empty
    - return (this is base case)
- add vertex to results list 
- mark vertex as visited 
- for each neighbor in vertex's neighbors: 
    if neighbor is not visited:
        recursively call DFS on neighbor

# Recursive 
- the function should accept a starting node 
- create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
-Create a helper function which accepts a vertex
    - the helper function should return early if the vertex is empty
    - the helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    - if any of those values have not been visited, recursively invoke the helper function with that vertex
- invoke the helper function with the starting vertex
- return the result array


Iterative Solution  
Pseudocode
dfs-iterative (start):
    let S be a stack 
    S.push(start)
    while S is not empty
        vertex = s.pop()
        if vertex is not labeled as discovered:
            visit vertex (add to result list)
            label vertex as discovered
            for each of vertex's neighbors, N do s.push(N)

# Detailed outline for Iterative
- the function should accept a starting node
- create a stack to help use keep track of vertices (use a list/array)
- create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- add the starting vertex to the stack, and mark it visited
- **while the stack has something in it**:
    - pop the next vertex from the stack
    - if that vertex hasn't been visited yet:
        - mark it as visited
        - add it to the result list
        - push all of its neighbors into the stack



# Breadth First Traversal
pseudocode
- function should accept a starting vertex
- create a queue (can use an array) and place the starting vertex in it
- create an array to store the nodes visited
- create an object to store nodes visited
- mark the starting vertex as visited
- loop as long as there is anything in the queue
- remove the first vertex from the queue and push it into the array that stores nodes visited
- loop over each vertex in the adjacency list for the vertex you are visting. 
- if it is not inside the object that stores nodes, visited, mark it as visited and enqueue that vertex
- once you have finished looping, return the array of visited nodes