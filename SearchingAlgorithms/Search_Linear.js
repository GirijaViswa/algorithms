// Write a function linearSearch which accepts an array and a value, and returns the index 
// at which the value exists. If the value doesn't exists in the given array then return -1.

// O(1)         O(n)            O(n)
// Best         Average         Worst


function linearSearch(arr,val){
    var result = -1;
    arr.forEach((element,idx) => {
        if(element === val){
            result = idx
        }
    });

    return result;
}
console.log(linearSearch([10,15,20,25],202))