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