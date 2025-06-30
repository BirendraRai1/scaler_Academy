const {performance, PerformanceObserver} = require('perf_hooks');
// Store previous event loop utilization for delta calculation
let elu = performance.eventLoopUtilization();

// Create an observer for measures and custom entries
const obs = new PerformanceObserver((list)=>{
    const entries = list.getEntries();
    entries.forEach((entry)=>{
        //Log different entry types differently
        if(entry.entryType === 'measure') {
            console.log(`[MEASURE] Name: ${entry.name}, Duration: ${entry.duration.toFixed(3)}ms`);
        }else if(entry.entryType === 'myCustomMetric'){
             console.log(`[CUSTOM METRIC] ${entry.name}: ${entry.value}`);
        }
    })
})
obs.observe({ entryTypes: ['measure', 'myCustomMetric'] });
 
// --- Simulate an event loop blocking operation ---
function simulateBlockingOperation(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy-wait, blocking the event loop
  }
  console.log(`Blocked event loop for ${ms}ms.`);
}

console.log('Application started.');

setInterval(() => {
  const newElu = performance.eventLoopUtilization(elu); // Calculate delta
  console.log(`Event Loop Utilization: Active: ${newElu.active.toFixed(2)}ms, Idle: ${newElu.idle.toFixed(2)}ms`);
  elu = newElu; // Update for next iteratione.eventLoopUtilization(e
}, 1000).unref(); // unref() allows the process to exit if this is the only timer left


// Simulate a task that might have varying performance
function performTask() {
  const taskId = Math.random().toString(36).substring(7);
  performance.mark(`task-${taskId}:start`);

  let workAmount = Math.random() * 200 + 50; // Random work between 50-250ms
  if (Math.random() < 0.2) { // 20% chance to block the event loop
    console.warn(`Task ${taskId} is blocking the event loop!`);
    simulateBlockingOperation(100);
  } else {
    // Simulate non-blocking asynchronous work
    setTimeout(() => {
      let sum = 0;
      for (let i = 0; i < workAmount * 100000; i++) { // More work means more CPU
        sum += i;
      }
      // Simulate I/O delay
      setTimeout(() => {
        performance.mark(`task-${taskId}:end`);
        performance.measure(`task-${taskId}:duration`, `task-${taskId}:start`, `task-${taskId}:end`);
        console.log(`Task ${taskId} completed.`);
      }, Math.random() * 50); // Small I/O delay
    }, Math.random() * 50); // Small initial delay
  }
}

// Periodically run tasks
setInterval(performTask, 500); // Every 500ms, start a new task

// --- Custom Performance Entry Example (Node.js 16.0.0+) ---
// You can define custom metrics for specific events
if (performance.measureUserAgentSpecificDetails) { // Check if API exists (Node.js 16+)
    console.log('Node.js version supports custom performance entries.');
    let eventCount = 0;
    setInterval(() => {
        eventCount++;
        // Use a custom entry type like 'myCustomMetric'
        performance.measureUserAgentSpecificDetails('myCustomMetric', {
            name: 'criticalEventOccurred',
            value: eventCount, // Custom data point
            detail: { type: 'user_action', status: 'success' } // More custom data
        });
    }, 3000).unref();
} else {
    console.warn('Node.js version does not support custom performance entries (requires v16.0.0+).');
}