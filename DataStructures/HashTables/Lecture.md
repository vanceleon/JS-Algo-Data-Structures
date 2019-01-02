What is a hash table
- hash tables are used to store key-value pairs.
- They are like arrays, but the keys are not ordered
- unlike arrays, hash tables are fast for
    - finding values
    - adding new values
    - removing values
Care why?
- nearly every programming language has some sort of hash table data structure
- their speed, hash tables are very commonly used 


Hash Tables in languages
- Python has Dictionaries
- js -> objects
- java, go, scala -> maps 
- ruby -> hashes
- C -> created from scratch lol 

intro example
- store some colors
- by hex key
- name of color would give you the hex key of the color


implement a hash table
- in order to look up values by key, we need to convert keys into index values
- a function that performs a hashing function

intro to hash functions
- needs to be fast 
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input yields the same output)


#Dealing with Collisions 

# Separate Chaining
- each index in our array we store values using a more sophisticated data structure **(linked list or array)**.

# Linear Probing 
- in a collision, search through the array to find the next empty slot.
- this allows us to store a single key-value at each index.

#Set 
 1. Accepts a key and a value
 2. Hashes the key 
 3. stores the key-value pair in the hash table array via separate chaining

#Get
- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
 