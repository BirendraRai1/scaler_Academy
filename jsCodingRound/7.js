/*Create a function that takes an array of promises and executes them sequentially, 
returning a single promise that resolves when all have been completed
**********/ 
const getPromise = async(promise)=>{
    return await Promise.resolve().then(()=>promise)
}
let promise
const callTasks = async(promises)=>{   
    try{
        promise = await getPromise(promises.shift())
        if(promises.length==0)
            return promise
        return callTasks(promises)
    }catch(err){
        console.error("error message",err.message)
        return promise
    }
}

let task1 = new Promise((resolve)=>setTimeout(()=>resolve(3),3000))
let task2 = new Promise((_,reject)=>setTimeout(()=>reject(new Error(10)),5000));

(
    async ()=>{
        let result = await callTasks([task1,task2])
        console.log("result is "+result)
    }
)()

