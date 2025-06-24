/*Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct 
elements appear at the beginning in sorted order. Additionally, return the length of this distinct
 sorted subarray
***/ 

function removeDuplicatesFromSortedArray(arr){
    let i,j
    for(i=0,j=i+1;j<arr.length;){
        if(arr[i]!=arr[j]){
            i++
            arr[i] = arr[j]
            j++
        }else{
            j++
        }
    }
    for(let j=arr.length-1;j>i;j--)
        arr.pop()
    return arr
}
console.log(removeDuplicatesFromSortedArray([2, 2, 2, 2, 2]))
console.log(removeDuplicatesFromSortedArray([1, 2, 2, 3, 4, 4, 4, 5, 5]))
console.log(removeDuplicatesFromSortedArray([1, 2, 3]))
