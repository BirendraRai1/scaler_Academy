//Design a lazy function that wraps an initial function and returns an object that allows chaining of additional
//function calls. These functions should not execute immediately .Instead all operations should be queued and only run in 
//sequence when .execute() is called

const add = (a,b)=>a+b
const multiply = (a,b)=>a*b
function lazy(fn) {
    // Your implementation
    const queue = []
    return new Proxy({}, {
        get(_, prop) {
            if (prop === 'execute') {
                return ()=>queue.map(({fn,args})=>fn(...args))
            }
            if (!(prop in fn)) {
                throw new Error(`Function ${prop} not found`)
            }
            return (...args) => {
                queue.push({ fn: fn[prop], args })
                return new Proxy({},this)
            }
        }
    })
}

//For the purpose of user debugging.
//pass appropiate input in below fucntion call

const result = lazy({multiply,add}).multiply(2,3).add(4,5).execute()
console.log("result is",result)

