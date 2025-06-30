const EventEmitter = require('events');
class NotificationManager extends EventEmitter {
    constructor() {
        super();
        this.notificationsSent =0;
    }

    sendNotification(type,message) {
        this.notificationsSent++
        console.log(`[NotificationManager] Sending ${type} notification: ${message}`);
        this.emit('newNotification',{type,message,id:this.notificationsSent,timeStamp:Date.now()});
        if(type==='critical'){
            this.emit('criticalAlert',message)
        }
    }
    startMonitor(){
        this.once('newNotification', (notif) => {
            console.log(`[Monitor] started monitoring after first notification (ID:${notif.id})!`)
        });
    }
}
const manager = new NotificationManager();
manager.on('newNotification', (notification)=>{
    console.log(`[listener1] New notification received: ID=${notification.id},Type=${notification.type}`)
})
manager.on('criticalAlert', (message)=>{
    console.warn(`[EMERGENCY ALERT] Critical notification detected: ${message}`);
})
manager.sendNotification('info', 'This is an info message');
manager.startMonitor();
manager.sendNotification('info','Welcome to the system')
manager.sendNotification('warning','Disk space is running low');
manager.sendNotification('critical','server #3 is down!')
manager.sendNotification('info','Another regular updates')


/*after manager.startMonitor(); is called the notification event should not be called further because 
the event is emitted once and gets removed am I right"*/

/*Calling manager.startMonitor() only sets up the .once() listener. It doesn't trigger the event.

The .once() listener removes itself after the event it's listening for is emitted the first time.

So, the newNotification event does continue to be called by manager.sendNotification() methods. 
It's only the specific listener registered with .once() that gets removed after it receives its first
 notification. The other .on() listeners continue to function as normal.

This is a very common point of confusion, and it's excellent that you're digging into the precise
timing!

*/ 

