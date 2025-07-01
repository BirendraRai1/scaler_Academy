const express = require('express');
const client = require('prom-client');
const app = express();
const PORT = process.env.PORT || 3000;

// Create a Registry to register the metrics
const register = new client.Registry();

//Enable default metrics collection (CPU, memory, event loop,etc)
client.collectDefaultMetrics({ register });

//------Custom Metrics------//
// 1. Counter :Tracks the number of times an event occurs
const httpRequestCounter = new client.Counter({
  name: 'http_request_total',
  help: 'Total number of HTTP requests',
  // CHANGED 'status-code' to 'status_code'
  labelNames: ['method', 'route', 'status_code'],
});

register.registerMetric(httpRequestCounter);

//2.Histogram : Measures the duration of values (eg: request durations)
    const httpRequestDurationSeconds = new client.Histogram({
        name: 'http_request_duration_seconds',
        help: 'Duration of HTTP requests in seconds',
        // CHANGED 'status-code' to 'status_code'
        labelNames: ['method', 'route', 'status_code'],
        buckets : [0.1, 0.5, 1, 2, 5], // Buckets for request duration
    });

    register.registerMetric(httpRequestDurationSeconds);

//3.Gauge : Represents a value that can go up and down (eg: current memory usage)
const activeUsersGauge = new client.Gauge({ // Renamed from memoryUsageGauge
  name: 'active_users', // Changed name from 'active-users' to 'active_users' (snake_case)
  help: 'Number of currently active users',
})

register.registerMetric(activeUsersGauge);

//---Express Routes---//
app.get('/', (req, res) => {
    //Increment the counter for this specific route and method
    // CHANGED 'status-code' to 'status_code'
    httpRequestCounter.inc({ method: req.method, route: '/', status_code: 200 });
    const end = httpRequestDurationSeconds.startTimer();//start timer for response duration
    //simulate some work
    setTimeout(() => {
        res.send('Hello from Node.js ');
        // CHANGED 'status-code' to 'status_code'
        end({ method: req.method, route: '/', status_code: 200 }); //end timer and record duration
    },1000);
})

app.get('/slow',(req,res)=>{
    // CHANGED 'status-code' to 'status_code'
    httpRequestCounter.inc({ method: req.method, route: '/slow', status_code: 200 });
    const end = httpRequestDurationSeconds.startTimer();
    //simulate slow response
    setTimeout(() => {
        res.send('This was a slow response');
        // CHANGED 'status-code' to 'status_code'
        end({ method: req.method, route: '/slow', status_code: 200 });
    }, 1000);
})

app.get('/error', (req, res) => {
    // CHANGED 'status-code' to 'status_code'
    httpRequestCounter.inc({ method: req.method, route: '/error', status_code: 500 });
    res.status(500).send('Something went wrong!');
})

//simulate active users changing
let currentActiveUsers = 0;
setInterval(() => {
    currentActiveUsers = Math.floor(Math.random() * 100); // Random active users count
    activeUsersGauge.set(currentActiveUsers); // Correct variable name used here
},5000); // Update every 5 seconds

//----Metrics Endpoint----//
app.get('/metrics', async (req, res) => {
        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
    console.log(`Metrics  available at http://localhost:${PORT}/metrics`);
})