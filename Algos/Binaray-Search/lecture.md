Binary search is a much faster form of search 

elimate half of the remaining elements at a time

Only works on sorted arrays

pseudocode
- Accept a sorted array and value 
- Create a left pointer at the start of the array, and right pointer at the end of the array
- While the left pointer comes before the right pointer:
    - Create pointer in the middle
    - if you find the value you want, return the index
    - if value is too small, move the left pointer up
- if never find, return -1