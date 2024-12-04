const debounce = (mainFunction, delay) => {
  // Declare a variable called 'timer' to store the timer ID
  let timerId;
  // Return an anonymous function that takes in any number of arguments
  return function (...args) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timerId);
    //// Set a new timer that will execute 'mainFunction' after the specified delay
    timerId = setTimeout(() => {
        console.log("delay is",delay)
      mainFunction(...args);
    }, delay);
  };
};

// Initialize startTime. We use this to cross-check debouncedFn
let startTime = Date.now();

const fetchData = () => {
  console.log(`fetchData called after ${Date.now() - startTime}ms`);
};
const debouncedFn = debounce(fetchData, 50);

//Input1
// setTimeout(debouncedFn, 30);
// setTimeout(debouncedFn, 40);


setTimeout(debouncedFn, 30);
setTimeout(debouncedFn, 40);
setTimeout(debouncedFn, 100);
setTimeout(debouncedFn, 160);
setTimeout(debouncedFn, 170);

/*Debouncing is a way of delaying the execution of a
function until a certain amount of time has passed since the
last time it was called.
*
*
*****/ 