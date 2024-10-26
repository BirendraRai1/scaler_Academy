function eventEmitter(){
    let eventsMap = {}
    this.addEventListener = (eventName,callback)=>{
        if(!eventsMap[eventName]){
            eventsMap[eventName] = []
        }
        eventsMap[eventName].push(callback)
    }
    this.removeEventListener = (eventName,callback)=>{
        const allCallbacks = eventsMap[eventName] || []
        eventsMap[eventName] = allCallbacks.filter(cb=>cb!=callback)
    }
    this.emitEvent = (eventName,...args)=>{
        const allCallbacks = eventsMap[eventName] || []
        allCallbacks.forEach(callback=>{
            requestIdleCallback(()=>callback(...args))
        })
    }
}

const emitter = new eventEmitter()

const greet = (message)=>console.log(`Greet:${message}`)
const greetAgain = (message)=>console.log(`Greet again:${message}`)
const farewell = (message)=>console.log(`Farewell:${message}`)
emitter.addEventListener('hello',greet)
emitter.addEventListener('hello',greet)
emitter.addEventListener('hello',greetAgain)
emitter.addEventListener('goodbye',farewell)
emitter.emitEvent('hello','Hello,World')
emitter.emitEvent('goodbye','Goodbye,World')
emitter.removeEventListener('hello',greet)
//emitter.removeEventListener('hello',greetAgain)
emitter.emitEvent('hello','Hello World!')