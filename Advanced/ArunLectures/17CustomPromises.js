const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

const customPromise = function (executorFn){
    let state = PENDING
    let value = undefined
    let scbArr = []
    let fcbArr = []
    const resolve = (value)=>{
        if(state !=PENDING)
            return 
        state = RESOLVED
        value = value
        scbArr.forEach((cb)=>{
            cb(value)
        })
    }
    const reject = (err)=>{
        if(state !=PENDING)
            return
        state = REJECTED
        value = err
        fcbArr.forEach((cb)=>{
            cb(value)
        })
    }
    this.then = (cb)=>{
        if(state ==RESOLVED)
            cb(value)
        else{
            scbArr.push(cb)
        }
    }
    this.catch = (cb)=>{
        if(state ==REJECTED)
            cb(value)
        else{
            fcbArr.push(cb)
        }
    }
    executorFn(resolve,reject)
} 

const executorFn = (resolve,reject)=>{
    setTimeout(function(){
        resolve("hey then")
    },5000)

    setTimeout(function(){
        reject("I made an error")
    },6000)
}

const myPromise = new customPromise(executorFn)
myPromise.then((data)=>{
    console.log("I am the second then",data)
})