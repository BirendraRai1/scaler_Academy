(
    function createSetTimeout(){
        const timerMap = {}
        const nativeSetTimeout = window.setTimeout
        const nativeClearTimeout = window.clearTimeout
        window.setTimeout = (callback,delay,...args)=>{
            const id = nativeSetTimeout(callback,delay,...args)//setTimeout() in JavaScript 
            //returns a timeout ID (a numeric identifier) which can be used to reference the
            // specific timer created by setTimeout().
            timerMap[id] = true
        }
        window.clearTimeout = (id)=>{
            nativeClearTimeout(id)
            delete timerMap[id]
        }
        window.clearAllTimers = ()=>{
            for(let id in timerMap)
                clearTimeout(id)
        }
    }
)()

const startTime = Date.now()
const print = ()=>console.log(`Timer executed after ${Date.now()-startTime}ms`)
setTimeout(print,750)
setTimeout(print,1000)
setTimeout(print,1250)
setTimeout(print,1500)
setTimeout(()=>clearAllTimers(),1200)