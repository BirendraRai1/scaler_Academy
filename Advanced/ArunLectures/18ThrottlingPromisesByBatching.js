function throttlePromises(funcsArr,max){
    const result = []
    let nextAPIBatch = 0
    return new Promise((resolve,reject)=>{
        (
            function fetchAPIcalls(){
                const start = nextAPIBatch
                console.log("start is",start)
                const end = nextAPIBatch+max
                const nextAPICallsToMake = funcsArr.slice(start,end)
                const nextAPICallsPromises = nextAPICallsToMake.map(fn=>fn())
                Promise.all(nextAPICallsPromises)
                .then(data=>{
                    result.push(...data)
                    if(result.length==funcsArr.length)
                        resolve(result)
                    else{
                        nextAPIBatch = end
                        fetchAPIcalls()
                    }
                })
                .catch((errors)=>{
                    reject(errors)
                })
            }
        )()
    })
}

const getRandomTimer = ()=>Math.round(Math.random()*1000)
const getFullfillingPromise = (value)=>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(value),getRandomTimer())
    })
}
const getRejectingPromise = (value)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject(value),getRandomTimer())
    })
}

const input1 = new Array(10).fill(null).map((elem,index)=>()=>getFullfillingPromise(index))
throttlePromises(input1,5)
.then(data=>console.log("Resolved with data",data))
.catch(error=>console.log("Rejected with",error))