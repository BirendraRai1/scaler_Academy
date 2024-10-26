Promise.prototype.finally= function (callback){
    return new Promise((resolve,reject)=>{
        console.log("Entered inside custom finally")
        let val
        let wasRejected
        this.then((value)=>{
            wasRejected = false
            val = value
            return callback()
        },(err)=>{
            console.log("Error came from here")
            wasRejected = true
            val = err
            return callback()
        })
        .then(()=>{
            console.log("entered inside this")
            if(!wasRejected){
                return resolve(val)
            }
            return reject(val)
        })
        .catch((err)=>{
            console.log("error inside catch block",err)
            return reject(err)
        })
    })
}

// Promise.reject(3)
// .finally(()=>{throw 'New Error'})
// .then((value)=>console.log('value is',value))
// .catch((err)=>console.log('Error is',err))

//this.then() in finally:
//Since the promise is rejected, the err path of this.then is triggered.
//The callback inside .finally() runs.
//The callback throws an error ('New Error'), so this breaks the normal promise resolution 
//flow and jumps to the next .catch block.

// Promise.reject(3)
// .finally(() => Promise.reject('Rejected Error'))
// .catch(console.log)

Promise.resolve(10)
.then((value) => console.log('Resolved with', value))
.catch(((error) => console.log('Rejected with', error)))
.finally(() => console.log('Perform some cleanup handling'))