const throttle = (mainFunction, delay) => {
  let timerId = null;
  let lastExecuted = null
  return (...args) => {
    if (lastExecuted == null) {
      console.log("args when the lastExecuted is null",...args)
      mainFunction(...args);
      lastExecuted = Date.now()
    }
    else{
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        if(Date.now()-lastExecuted>=delay){
          console.log("args when the lastExecuted has value",...args)
          mainFunction(...args)
          lastExecuted=Date.now()
        }
      }, delay-(Date.now()-lastExecuted));
    }   
  };
};let prev = Date.now();

// const fetchData = () => {
//   console.log(`fetchData called after ${Date.now() - prev}ms`);
//   prev = Date.now();
// };

// const throttledFn = throttle(fetchData, 50);
// document.addEventListener('mousemove', throttledFn);

const throttledFunction = throttle((msg) => {
  console.log(msg, Date.now());
}, 2000);

throttledFunction("Call 1"); // Executes immediately
throttledFunction("Call 2"); // Throttled
throttledFunction("Call 3"); // Throttled

setTimeout(() => throttledFunction("Call 4"), 1100);
// Executes after 1.1 seconds
setTimeout(() => throttledFunction("Call 5"), 900);
// throttle
setTimeout(() => throttledFunction("Call 6"), 2100);


/*Definition: Throttling ensures that a function is executed at most once in a specified interval, even if the event is triggered multiple times during that interval.

Use Case: Suitable for scenarios where you want to regulate the frequency of function execution while ensuring it runs at regular intervals.

Example: Handling scroll events (e.g., updating the scroll position every 100ms instead of continuously)
*
*
*****/ 
