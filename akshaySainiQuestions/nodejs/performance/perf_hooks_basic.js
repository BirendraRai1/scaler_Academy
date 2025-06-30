// perf_hooks_basic.js beginner
const {performance} = require('perf_hooks');
function calculateSum(n){
    let sum =0
    for(let i=0;i<n;i++){
        sum +=i
    }
    return sum;
}

// 1. Mark the start time
const start = performance.now()// Get the high-resolution timestamp

// 2. Execute the code you want to measure
const result = calculateSum(100000000)//calculate sum to 100 million

// 3. Mark the end time
const end = performance.now()

// 4. Calculate the duration
const duration = end - start

console.log(`Calculated sum: ${result}`);
console.log(`Execution time: ${duration.toFixed(3)} milliseconds`);
