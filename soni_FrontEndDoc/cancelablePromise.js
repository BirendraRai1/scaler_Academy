const asyncTask1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Task 1 completed")
    },500)
})

const asyncTask2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Task 2 completed")
    },3000)
})

class cancelledPromiseError extends Error{
    constructor(){
        super("Promise has been cancelled")
        this.name = "cancelledPromiseError"
    }
}

Promise.cancelable = (promise)=>{
    let isCancelled = false
    const wrappedPromise = new Promise((resolve,reject)=>{
        promise.then((value)=>{
            if(isCancelled)
                reject(new cancelledPromiseError())
            else
                resolve(value)
        })
        .catch((err)=>reject(err))
    })
    wrappedPromise.cancel = ()=>{
        isCancelled = true
    }
    console.log("wrappedPromise is",wrappedPromise)
    return wrappedPromise
}

const cancelableTask1 = Promise.cancelable(asyncTask1)
const cancelableTask2 = Promise.cancelable(asyncTask2)

console.log("cancelableTask1 is",cancelableTask1)
console.log("cancelableTask2 is",cancelableTask2)

cancelableTask1
    .then((result)=>console.log(result))
    .catch((error)=>console.error(error))
cancelableTask2
    .then((result)=>console.log(result))
    .catch((error)=>console.error(error))
setTimeout(()=>{
    cancelableTask1.cancel()
    cancelableTask2.cancel()
},1000)