const throttle = (mainFunction, delay) => {
  let timerFlag = null;
  return (...args) => {
    if (timerFlag == null) {
      mainFunction(...args);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
};

let prev = Date.now();

const fetchData = () => {
  console.log(`fetchData called after ${Date.now() - prev}ms`);
  prev = Date.now();
};

const throttledFn = throttle(fetchData, 50);
document.addEventListener('mousemove', throttledFn);


/*Throttling is suitable for scenarios where you want to limit how often a function can be
called, but you don’t want to miss any calls.
*
*
*****/ 
