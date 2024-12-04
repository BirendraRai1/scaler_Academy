//Implement a `flatten()` function which will flatten the original
//array into a new array to the `depth` of arr given in the
//question

//recursive approach
function flatten(arr,depth=1){
    if(depth==0)
        return arr
    let result = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            const flattenedArr = flatten(arr[i],depth-1)
            result = [...result,...flattenedArr]
        }
        else
            result = [...result,arr[i]]
    }
    return result
}

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(flatten(arr2,1))

