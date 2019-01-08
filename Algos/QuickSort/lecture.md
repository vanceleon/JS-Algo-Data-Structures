#Quick Sort
- like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot


#How does it work?
- through recursion


#Pivot Helper
- In order to implement quick sort, it is useful to first implement a function responsible arranging elements in an array on either side of a pivot
- given an array, this helper function should designate an element as the pivot
- it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values are greater than the pivot are moved to the right of the pivot

#Picking the pivot 
- The runtime of quick sort depends in part on how one selects the pivot
- ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting
- For simplicity, going to choose the pivot to be the first element (are consequences to approach)


#Pivot Pseudocode   
- accept **three** arguments: *an array, a start index, and an end index*
- Grab the pivot from the start of the array
- Store the **current** pivot index in a variable (this will keep track of where the pivot should end up)
- loop through the array from the start until the end
    - if the pivot is *greater* than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
- swap the starting element (ex the pivot) with the pivot index 
- return the pivot index


# Quick Sort Pseudocode
- Call pivot helper on the array
- When the helper returns to you the updated pivot index, **recursively** call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.