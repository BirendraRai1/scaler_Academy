const createAsyncTask = ()=>{
    const randomValue = Math.random()*10
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(randomValue >5)
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
// const taskRunnerIterative = async(tasks,cb)=>{
//     const result = []
//     const error = []
//     for(let task of tasks){
//      try{
//         const num = await task()
//         result.push(num)
//      }catch(err){
//         error.push(err)
//      }
//     }
//     return cb(result,error)
// }

//taskRunnerIterative(tasks,(result,error)=>console.log(result,error))

// const taskRunnerRecursion = (tasks,cb)=>{
//     const result = []
//     const error = []
//     const helper = async(ptr=0)=>{
//         if(ptr ==tasks.length)
//             return cb(result,error)
//         try{
//             const num = await tasks[ptr]()
//             result.push(num)
//         }catch(err){
//             error.push(err)
//         }
//         helper(++ptr)
//         }
//     helper()
// }
// taskRunnerRecursion(tasks,(result,error)=>console.log(result,error))

// const taskRunnerRecursion = (tasks, cb) => {
//     const result = [];
//     const error = [];

//     const helper = (ptr = 0) => {
//         if(ptr === tasks.length) {
//             cb(result, error)
//             return;
//         }
//         tasks[ptr]().then((num) => {
//             result.push(num)
//         }).catch((num) => {
//             error.push(num)
//         }).finally(() =>{
//             helper(++ptr)
//         })
//     }
//     helper()
// }
// taskRunnerRecursion(tasks, (result, err) => console.log(result, err))

const taskRunnerIterative = async(tasks,cb)=>{
    const result = []
    const error = []
    
    for(let i = 0;i<tasks.length;i++){
        await tasks[i]().then((num)=>{
            result.push(num)
        }).catch((num)=>{
            error.push(num)
        })
    }
        return cb(result,error)
}

taskRunnerIterative(tasks,(result,error)=>console.log(result,error))