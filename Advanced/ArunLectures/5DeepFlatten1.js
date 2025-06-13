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

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(flatten(arr2,1))


//iterative approach
function flattenIterativeWithDepth(arr,depth=1){
    let result = []
    let stack = []
    let newArr = arr.map((curr)=>[curr,depth])
    stack.push(...newArr)
    while(stack.length){
        let [curr,depth] = stack.pop()
        if(depth==0){
            result.push(curr)
            continue
        }
        if(!Array.isArray(curr))
            result.push(curr)
        else{
            let newArr = curr.map((arr)=>[arr,depth-1])
            stack.push(...newArr)
        }
    }
    return result.reverse()
}
const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(flattenIterativeWithDepth(arr2,1))


