//3.Event-Driven Pattern
/*The event driven pattern utilizes the event driven architecture of nodejs to handle events 
  For handling events it uses EventEmitter class .An event emitter enables developers to 
  raise an event from any part of the application that can be listened to by a listener 
  and an action can be performed 
*/

const EventEmitter = require("events")
const emitter = new EventEmitter()
emitter.on("someEvent",()=>console.log("An event just took place"))
emitter.emit("someEvent")

//The events executed by event emitters are executed synchronously