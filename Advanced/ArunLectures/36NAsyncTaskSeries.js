function series(asyncFuncsArr){
    return function(mainCallback,initData){
        let idx = 0
        const callbackMeWhenComplete = (error,result)=>{
            if(error instanceof Error){
                mainCallback(error,undefined)
            }
            else{
                idx++
                const nextAsyncFunc = asyncFuncsArr[idx]
                if(nextAsyncFunc){
                    nextAsyncFunc(callbackMeWhenComplete,result)
                }
                else{
                    mainCallback(undefined,result)
                }
            }
        }
        const firstAsyncFunc = asyncFuncsArr[idx]
        firstAsyncFunc(callbackMeWhenComplete,initData)
    }
}

const multiplyBy2Async = (callback,input)=>{
    setTimeout(()=>callback(undefined,input*2),3000)
}

const multiplyBy3Async = (callback,input)=>{
    setTimeout(()=>callback(undefined,input*3),1000)
}

const asyncError = (callback,input)=>{
    setTimeout(()=>callback(new Error(`Testing Error`),2000))
}

const callbackMeWhenCompleted = (error,result)=>{
    if(error instanceof Error){
        console.log(`[caught Error] ${error}`)
    }
    else{
        console.log(`completed async task with result:${result}`)
    }
}

const asyncSeriesExecutor1 = series([
    multiplyBy2Async,
    multiplyBy3Async,
    multiplyBy3Async,
    multiplyBy2Async
])

asyncSeriesExecutor1(callbackMeWhenCompleted,10)

const asyncSeriesExecutor2 = series([
    multiplyBy2Async,
    asyncError,multiplyBy2Async
])
asyncSeriesExecutor2(callbackMeWhenCompleted,1)