const curry = (mainFn)=>{
    return function curried(...args){
        if(args.length>=mainFn.length)
            return mainFn(...args)
        else{
            //console.log(`this is`,this)
            return curried.bind(null,...args)
        }
            
    }
}

const totalNum = (a, b, c) => {
    return a + b + c;
}

const curriedTotal = curry(totalNum);

console.log("curriedTotal(10)(20)(30)",curriedTotal(10)(20)(30));
console.log("curriedTotal(10, 20)(30)",curriedTotal(10, 20)(30));
console.log("curriedTotal(10)(20, 30)",curriedTotal(10)(20, 30));
console.log("curriedTotal(10, 20)",curriedTotal(10, 20));
console.log("curriedTotal(10)(20, 30, 40, 50)",curriedTotal(10)(20, 30, 40, 50));
console.log("curriedTotal(10)(20, 30)(40)",curriedTotal(10)(20, 30)(40));


/*
In this specific case of currying, using this instead of null would not be ideal 
because the primary goal of currying is to create a function that is independent of 
any specific context (this). By passing null, we ensure that this in the curried 
function is unbound, making it "pure" and focused only on the arguments
********/ 

/*The number of arguments is not explicitly calculated by bind. 
Instead, the process of accumulating arguments works by:

Pre-filling: bind(null, ...args) makes a new function that already has some arguments 
fixed (...args).
When this new function is called again, it adds the new arguments to the already 
accumulated arguments.
******/ 