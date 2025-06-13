const createAsyncTask = ()=>{
    const randomValue = Math.floor(Math.random()*10)
    console.log("randomValue is ",randomValue)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(randomValue>5)
                resolve(randomValue)
            else
                reject(randomValue)
        },randomValue*100)   
    })
}

const tasks = [
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask
]

const taskRunnerIterative = async(tasks,cb)=>{
    const result = []
    const error = []
    for(let task of tasks){
        try{
            const successTask = await task()
            result.push(successTask)
        }catch(e){
            error.push(e)
        }
    }
    cb(result,error)
}

//taskRunnerIterative(tasks,(result,error)=>console.log(result,error))

const taskRunnerRecursion = (tasks,cb)=>{
    const result = []
    const error = []
    const helper = (ptr=0)=>{
        if(ptr ==tasks.length)
            return cb(result,error)
        tasks[ptr]().then((num)=>
            result.push(num)).catch((num)=>
            error.push(num)
        ).finally(()=>{
            helper(++ptr)
        })
    }
    helper()
}
taskRunnerRecursion(tasks,(result,error)=>console.log(result,error))