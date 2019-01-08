#Radix Sort
- a special sorting algorithm that works on lists of numbers
- never makes comparisons between elements!
- it exploits the fact that information about the size of a number is encoded in the number of digits.
- *more digits* is a larger number

#Radix Sort Helpers
- In order to implement radix sort, helper functions are helpful:
- getDigit(num, place) - returns the digit in num at the given place value
- how many times to run helper
    -  **digitCount(num)** - returns the number of digits in num. 
- **mostDigits(nums)** - given an array of numbers, returns the numbers of digits in the largest numbers in the list.

#Radix Sort Pseudocode 
- define a function that accepts list of numbers
- figure out how many digits the largest number has 
- loop from *k = 0* up to this largest number of digits 
- for each iteration of loop:
    - create buckets for each digit( 0 to 9)
    - place each number in the corresponding bucket based on its *kth* digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- return list at the end