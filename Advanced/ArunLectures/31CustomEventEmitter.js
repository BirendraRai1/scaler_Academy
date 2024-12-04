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
            //or setTimeout in nodejs
            //setTimeout(()=>callback(...args),0)
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

/*Event Emitter` is
something which triggers an event and anyone who is
listening can execute their work when only that specific type
of event occurs or triggers.
*
*
*
*
*
*Note: `requestIdleCallback` queues up the callback following
the first-in first-out pattern, which means the callbacks will be
executed in the order they were registered (basically the order
is synchronous, but the execution is not).
***/ 

class EventEmitter{
    constructor(){
        this.eventsMap = {}
    }
    addEventListener(eventName,callback){
        if(!this.eventsMap[eventName])
            this.eventsMap[eventName] = []
        this.eventsMap[eventName].push(callback)
    }
    removeEventListener(eventName,callback){
        const allCallbacks = this.eventsMap[eventName] || []
        this.eventsMap[eventName] = allCallbacks.filter((cb)=>cb !=callback)
    }
    emitEvent(eventName,...args){
        const allCallbacks = this.eventsMap[eventName] || []
        allCallbacks.forEach((cb)=>requestIdleCallback(()=>cb(...args)))
    }
}