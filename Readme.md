This folder my practice Algorithms in Javascript.

-------------------------------------------------------------------------
Linear Search 

 O(1)         O(n)            O(n)
 Best         Average         Worst

1. Func accepts an array and value.
2. Loop through the array to check if the current element = value 
3. If yes, return the number/ index / yes,found; else -1 /notfound.

egs -> indexOf,includes,find,findIndex
-------------------------------------------------------------------------
Binary Search

O(1)        O(logn)             log base 2
Best        Avg/Worst


1. Func accepts an sorted array and value.
2. Create leftptr = start of the array,rightptr=end of the array
3. while(leftptr < rightptr), 
    3.1 create midptr
    3.2 arr[midptr] === value, return value/index/ yes,found
    3.3 if val is too small then move the leftptr
    3.4 if val is too large then move the rightptr
    3.5 if val not found, then return -1/not found.

-------------------------------------------------------------------------