function once(mainFn){
    // stores the `result` of mainFn when it was called for 1st time
    let result
    // Tracks if the `mainFn` was called once or not
    let isCalledOnce = false
    return function(...args){
        // If not called once, call it and store the result
        if(!isCalledOnce){
            // using the `call` method of functions, so persist the context of "this" which the function is called
            // result = mainFn.call(this,...args)
            //or
            result = mainFn(...args)
            isCalledOnce = true
        }
         return result   
    }
}

const sum = (a,b,c)=>a+b+c
const oncedSum = once(sum)
console.log(oncedSum(1,2,3))
console.log(oncedSum(2,4,6))