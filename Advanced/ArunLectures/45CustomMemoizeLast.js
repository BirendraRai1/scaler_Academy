function memoizeLast(mainFn,isArgsEqual=defaultIsArgsEqual){
    let lastArgs = []
    let lastResult
    return function(...args){
        // Check if the lastArgs and current args are equal
        if(isArgsEqual(args,lastArgs)){
            console.log("getting the result from cache",...args," ",lastArgs)
            return lastResult
        }
        else{
            console.log("getting the result from calculation",...args)
            //const result = mainFn.call(this,...args)
            const result = mainFn(...args)
            lastResult = result
            lastArgs = args
            return result
        }
    }
}

const defaultIsArgsEqual = (args1,args2)=>{
    if(args1.length !== args2.length)
        return false
    for(let i=0;i<args1.length;i++){
        if(args1[i]!= args2[i])
            return false
    }
    return true
}

function sum(a,b,c){
    return a+b+c
}

const memoizedSum = memoizeLast(sum)
console.log(memoizedSum(1,2,3))
console.log(memoizedSum(1,2,3))
console.log(memoizedSum(2,4,5))
console.log(memoizedSum(1,2,3))