function sum(a,b,c){
    return a+b+c
}

function memoize(mainFn,resolver){
    const cache = {}
    return function(...args){
        const key = resolver?resolver(...args):args[0]
        console.log(`key is`,key)
        if(cache.hasOwnProperty(key)){
            console.log("returning the result from cache")
            return cache[key]
        }
        else{
            //console.log("this inside else is ",this)
            console.log("mainFn is",mainFn)
            const result = mainFn(...args)
            cache[key] = result
            return result
        }
    }
}

const resolver = (...args)=>args.join('_')
const memoizedSum = memoize(sum,resolver)
console.log(`The result is ${memoizedSum(1,2,3)}`)
console.log(memoizedSum(1,2,3))
console.log(memoizedSum(1,2,3))
console.log(memoizedSum(2,4,3))
console.log(memoizedSum(2,4,3))