const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
let geek1 = (msg)=>{
    console.log('Message from geek1 :'+msg)
}

let geek2 = (msg)=>{
    console.log('Message from geek2 :'+msg)
}

eventEmitter.on('myEvent',geek1)
eventEmitter.on('myEvent',geek1)
eventEmitter.on('myEvent',geek2)

eventEmitter.removeListener('myEvent',geek1)
eventEmitter.emit('myEvent','event occurred')
eventEmitter.removeAllListeners('myEvent')
eventEmitter.emit('myEvent','event occurred2')

/*The eventEmitter class in nodejs is a core module that provides a way to handle asynchronous
    events.It objects to emit events and other objects to listen and respond to those events
**/ 