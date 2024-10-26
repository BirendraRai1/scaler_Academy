function createMySetTimeout(){
    let timerID = 0
    const timerMap = {}
    function mySetTimeout(callback,delay,...args){
        const id = scheduleTimer()
        const startTime = Date.now()
        function check(){
            // If the scheduled/registered callback is deleted,just skip away
            if(!timerMap[id])
                return
            if(Date.now()-startTime>=delay)
                callback(...args)
            else
                requestIdleCallback(()=>check())
                //requestIdleCallback() is a method provided by browsers that allows you to 
                //schedule low-priority tasks during periods when the browser is idle, without 
                //interrupting critical tasks like rendering and user interactions. It's especially
                // useful for tasks that aren't time-sensitive and can be deferred, such as background 
                //tasks, analytics, or low-priority data processing
        }
        requestIdleCallback(()=>check())
        return id
    }
    function myClearTimeout(id){
        if(timerMap[id])
            delete timerMap[id]
    }
    function scheduleTimer(){
        const id = ++timerID
        timerMap[id] = true
        return id
    }
    return {mySetTimeout,myClearTimeout}
}

const { mySetTimeout, myClearTimeout } = createMySetTimeout();


const print = () => console.log(`Timer executed after ${Date.now() - startTime} ms`);

const startTime = Date.now();
const id1 = mySetTimeout(print, 4000)
const id2 = mySetTimeout(print, 1000)
const id4 = mySetTimeout(print, 3000)
mySetTimeout(() => myClearTimeout(id4), 2750)