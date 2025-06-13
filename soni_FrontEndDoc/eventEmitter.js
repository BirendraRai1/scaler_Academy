class EventEmitter{
    constructor(){
        this._eventSubscription = new Map()
    }
    subscribe(eventName,callback){
        if(typeof callback !=='function')
            throw new Error(`callback must be a function`)
        if(!this._eventSubscription.has(eventName))
            this._eventSubscription.set(eventName,new Map())
        const subscriptionId = new Date()
        const subscription = this._eventSubscription.get(eventName)
        subscription.set(subscriptionId,callback)
        return {
            remove :()=>{
                if(!subscription.has(subscriptionId))
                    throw new Error(`Subscription has already removed`)
                subscription.delete(subscriptionId)
            }
        }
    }
    emit(eventName,...args){
        const subscription = this._eventSubscription.get(eventName)
        if(!subscription)
            throw new Error(`No event found`)
        subscription.forEach((callback)=>callback(...args))
    }
}
const emitter = new EventEmitter()
const subscription = emitter.subscribe("modify",(link)=>console.log(`modified ${link}`))
const subscription1 = emitter.subscribe("modify",()=>console.log(`I am using whatsApp `))
emitter.emit("modify","biru@gmail.com")

