const cluster = require("cluster")
const os = require("os")
const express = require("express")
if(cluster.isMaster){
    console.log(`Master process ID:${process.pid}`)
    const numCPUs = os.cpus().length
    console.log(`numCPUs is ${numCPUs}`)
    for(let i=0;i<numCPUs;i++){
        cluster.fork()
    }
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`worker ${worker.process.pid} exited`)
        console.log('starting a new worker....')
        cluster.fork()
    })
}
else{
    const app = express()
    app.get('/',(req,res)=>{
        res.send(`Hello from worker ${process.pid}`)
    })
    app.get('/heavy_task',(req,res)=>{
        let sum = 0
        for(let i=0;i<1e8;i++){
            sum +=i
        }
        res.send(`Heavy task done by worker ${process.pid}`)
    })
    const PORT = 8000
    app.listen(PORT,()=>{
        console.log(`worker ${process.pid} is listening on port ${PORT}`)
    })
}


/*Clustering in Express.js works similarly to clustering in plain Node.js. The cluster 
module is used to create worker processes that share the same server port, allowing the 
application to handle more requests by utilizing multiple CPU cores



Master Process:

If the current process is the master (cluster.isMaster), it forks worker processes equal to
 the number of CPU cores.
Monitors worker processes and restarts them if they crash.
Worker Processes:

Each worker creates an instance of the Express.js app.
Workers share the same server port, and the master process distributes incoming 
requests among them.
Routes:

A simple route (/) to identify the worker handling the request.
A "heavy task" route (/heavy-task) to demonstrate load distribution.
Load Balancing:

The operating system's networking stack balances requests across the workers.
How to Run and Test
Save the code in a file, e.g., cluster-express.js.
Run it using node cluster-express.js.
Open multiple browser tabs or use a tool like curl to send requests to 
http://localhost:8000 and http://localhost:8000/heavy-task.
Observe which worker process handles each request.
*****/ 