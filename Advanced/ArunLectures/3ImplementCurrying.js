const curry = (mainFn)=>{
    return function curried(...args){
        if(args.length>=mainFn.length)
            return mainFn(...args)
        else
            return curried.bind(null,...args)
    }
}

/*The number of arguments is not explicitly calculated by bind. 
Instead, the process of accumulating arguments works by:

Pre-filling: bind(null, ...args) makes a new function that already has some arguments 
fixed (...args).
When this new function is called again, it adds the new arguments to the already 
accumulated arguments.
******/ 