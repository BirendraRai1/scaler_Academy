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
const fn = debounce((message) => {
  console.log(message);
}, 300);

fn("Hello");
fn("Hello, World!");
fn("Debounced!");


setTimeout(() => {
  fn("Debounced twice");
}, 400);

/*Debouncing is a way of delaying the execution of a
function until a certain amount of time has passed since the
last time it was called.
*
*
*****/ 