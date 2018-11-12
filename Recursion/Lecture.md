What is recursion?
A process (function) that calls itself.

why? 
one of which, object traversal 

Base Case 
The condition when the recursion ends. Thius is the most important step to remember. INifinite loop

Different Input
different values in the input

Stack overflow
to many functions are being called
result of basecase failing 

Pure recursion Tips
for arrays, use methods like slice, the spread operator, concat that make copies of arrays so you do not mutate them 
strings are immutable, need methods like slice, substr, substring to make copies of strings
to make copies of objects user Object.assign, or spread operator