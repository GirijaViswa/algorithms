// The idea of formula is to return higher value of pos
// when element to be searched is closer to arr[hi]. And
// smaller value when closer to arr[lo]

// pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]
//or
// pos = lo + [[(x-arr[lo])/(arr[hi]-arr[lo])]*(hi-lo)]

// arr[] ==> Array where elements need to be searched
// x     ==> Element to be searched
// lo    ==> Starting index in arr[]
// hi    ==> Ending index in arr[]

let array = [2,4,5,7,8,10,12,13,14,15,20,24]

// Function to perform Interpolation Search on array of element 'a'
// Search for 'value' in 'array'

function interpolationSearch(a,value){

//Assume that given array is sorted
    let low = 0;
    let high = a.length -1;

    while((low <= high) && (a[low] <= value) && (a[high] >= value)){
        console.log('low value',low)
        console.log('high value',high)
        let mid = low + ((high-low) * ((value-a[low])/(a[high]-a[low])))
        console.log('value of mid',mid)
        if(a[Math.floor(mid)] == value){
            console.log('true')
            return Math.floor(mid)
        }
        else if(a[Math.floor(mid)] < value){
            low = Math.floor(mid) + 1;
        }
        else{
            high = Math.floor(mid) + 1;
        }
        
    }
    return -1;
}

console.log(interpolationSearch(array,8))