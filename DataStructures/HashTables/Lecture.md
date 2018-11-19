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