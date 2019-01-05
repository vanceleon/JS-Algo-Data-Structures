Merge Sort

- it's a combination of two things - merging and sorting
- exploits the fact that arrays of 0 or 1 element are always sorted
- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

Pseudocode
- create an empty array, look at the smallest values in input array
- while there are still values we haven't looked at..
    - if value in first array is smaller than the value in the second array, push the value in the first array into results and move on to the next value in the first array
    - if value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    - Once we exhaust one array, push in all remaining values from the other array

Merge Sort Pseudocode
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array