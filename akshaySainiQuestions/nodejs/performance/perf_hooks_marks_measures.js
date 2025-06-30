//perf_hooks_marks_measures.js intermediate
const { performance, PerformanceObserver } = require('perf_hooks');

// Create a PerformanceObserver instance
const obs = new PerformanceObserver((list)=>{
    //callback function executed when performance entries are observed
    const entries = list.getEntries();//Get all new entries in this observation batch
    
    entries.forEach((entry) => {
        console.log(`[${entry.entryType}] Name: ${entry.name}, Duration: ${entry.duration.toFixed(3)}ms`);
    })
})

//2.Subscribe the observer to specific entry types
//We want to observe marks and measures entries
obs.observe({ entryTypes: ['mark', 'measure'] });

//---Simulate some application flow with marks and measures---
console.log('starting application initialization...')

// Mark the start of initialization
performance.mark('init:start');//This creates a mark entry

setTimeout(()=>{
    console.log('Performing network request...')
    performance.mark('networkRequest:start');//Mark before network operation
    // Simulate network request
    setTimeout(()=>{
        performance.mark('networkRequest:end');//Mark after network operation
        performance.measure('Network Request duration', 'networkRequest:start', 'networkRequest:end');//Measure the duration of the network request

        console.log('Processing data...')
        performance.mark('dataProcessing:start');//Mark start of the data processing
        // Simulate data processing
        let data = 0
        for(let i=0;i<50000000;i++){
            data +=Math.sqrt(i);
        }
        performance.mark('dataProcessing:end');//Mark end of the data processing
        performance.measure('Data Processing duration', 'dataProcessing:start', 'dataProcessing:end');//Measure the duration of data processing
        performance.mark('init:end');//Mark the end of initialization
        performance.measure('totalInitializationTime', 'init:start', 'init:end');//Measure the total initialization
        console.log('Application ready.');


    // Disconnect the observer when no longer needed
    // This is important in long-running applications to prevent memory leaks
    // process.nextTick(() => {
    //     console.log('Disconnecting observer...');
    //     obs.disconnect();
    // })
    },100)// Simulate 100ms network latency
},50) // Simulate 50ms initial setup delay


/*For more structured and powerful performance analysis, perf_hooks allows you to create "performance entries" and collect them using "performance observers."

Key Concepts:
PerformanceEntry: An object representing a single performance metric. It has properties like name, entryType, startTime, duration, etc.

performance.mark(name): Creates a PerformanceEntry of entryType: 'mark' at the current time with a given name. Marks are like named timestamps.

performance.measure(name, startMark, endMark): Creates a PerformanceEntry of entryType: 'measure'. It calculates the duration between two existing marks (or between a mark and performance.now(), or between performance.now() and another mark). If startMark and endMark are omitted, it measures from the Node.js process start to now.

PerformanceObserver: A class that allows you to subscribe to and react to new PerformanceEntry objects as they are recorded.
*********/ 




/*
Benefits of Marks and Measures:

Context: name gives context to what is being measured.

Clarity: measure explicitly shows the duration between two points.

Automation: PerformanceObserver allows you to automatically collect and process performance data 
without manually calling performance.now() everywhere. This is essential for monitoring and reporting.
*****/ 

