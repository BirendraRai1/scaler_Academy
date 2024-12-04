function createMySetInterval(){
    let intervalId = 0
    const intervalMap = {}
    function mySetInterval(callback,delay,...args){
        let id = ++intervalId
        function scheduleInterval(){
            intervalMap[id] = setTimeout(()=>{
                callback(...args)
                if(intervalMap[id]){
                    console.log(`intervalMap[id] is ${intervalMap[id]}`)
                    scheduleInterval()
                }
                    
            },delay)
            console.log(`intervalMap[id] is ${intervalMap[id]} and id is ${id}`)
        }
        scheduleInterval()
        return id
    }
    function myClearInterval(id){
        if(intervalMap[id]){
            clearTimeout(intervalMap[id])
            delete intervalMap[id]
        }
    }
    return {mySetInterval,myClearInterval}
}

const {mySetInterval,myClearInterval} = createMySetInterval()
const print = ()=>console.log(`Interval executed at ${Date.now()-startTime}ms`)

const startTime = Date.now()

const id1 = mySetInterval(print,1000)

// const id2 = mySetInterval(print,2000)

// setTimeout(()=>myClearInterval(id2),7000)