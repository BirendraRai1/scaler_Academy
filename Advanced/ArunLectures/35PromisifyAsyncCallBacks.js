const promisify = (asyncFunction)=>{
    return function(...args){
        console.log("args is ",args)
        return new Promise((resolve,reject)=>{
            const errorFirstCallback = (error,result)=>{
                if(error instanceof Error)
                    reject(error)
                else
                    resolve(result)
            }
            asyncFunction(...args,errorFirstCallback)
        })
       
    }
}

function multiply(a,b,callback){
    console.log("callback is",callback)
    setTimeout(()=>callback(new Error(a),a*b),1000)
}

const multiplyPromise = promisify(multiply)

multiplyPromise(1,2)
.then(firstResult=>multiplyPromise(firstResult,3))
.then(finalResult=>console.log(`Final result is ${finalResult}`))
.catch(error=>console.log('Found error',error))