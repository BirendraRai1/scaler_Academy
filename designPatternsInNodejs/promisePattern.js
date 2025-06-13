//8.Promise Pattern
/*The promise pattern is extremely powerful in the sense that it helps to execute asynchronous 
  operations in the sequential manner
  Firstly a promise can be created by instantiating a Promise class which takes a couple of parameters
  resolve and reject
*/ 

const myPromise = new Promise((resolve,reject)=>{
    let x = 5
    setTimeout(()=>{
        if(x>0)
            resolve("success")
        else
            reject("Failure")
    },2000)
})

myPromise
.then((res)=>console.log(res))
.catch((err)=>console.log(err))