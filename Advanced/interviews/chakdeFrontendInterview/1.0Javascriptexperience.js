/*Please implement your chunk(arr,size)
  chunk([1,2,3,4,5],1)
  //[[1],[2],[3],[4],[5]]

  chunk([1,2,3,4,5],2)
  //[[1,2],[3,4],[5]]

  chunk([1,2,3,4,5],3)
  //[[1,2,3],[4,5]]

  chunk([1,2,3,4,5],4)
  //[[1,2,3,4],[5]]

  chunk([1,2,3,4,5],5)
  //[[1,2,3,4,5]]
  */
let originalArr = [1, 2, 3, 4, 5];
let result = [];
let arr1 = [];

function chunk(arr, size) {
  for (let i = 0; i < arr.length; ) {
    arr1.length = 0; //here we are initializing arr1.length=0 so that we dont need to create a new array
    for (let j = i; j < i + size && j < arr.length; j++) {
      arr1.push(arr[j]);
    }
    i = i + size;
    result.push([...arr1]); //here we are using spread operator to push all the elements of arr1
  }
  return result;
}

console.log(chunk(originalArr, 2));

/* create a count function
    count() //1
    count() //2
    count() //3
    count.reset()
    count() //1
    count() //2
    count() //3
*/

const count = (() => {
  let counter = 0;
  function inner() {
    counter++;
    console.log("counter", counter);
  }
  inner.reset = function () {
    counter = 0;
  };
  return inner;
})();
//Function.prototype.__proto__==Object.prototype

count(); //1
count(); //2
count(); //3
count.reset();
count(); //1
count(); //2
count(); //3

// implement debounce and abort controller in javascript
/*Combining an AbortController and a debounce function can be useful when you need to control the rate at which a function is executed and also have the ability to cancel pending operations. Here’s an example of how to implement this in JavaScript:

Debounce Function: This delays the execution of a function until a certain amount of time has passed since the last time it was invoked.
AbortController: This provides a way to abort DOM requests, such as fetch calls.
Below is an example of how you might combine these two:

Step 1: Create a Debounce Function
First, create a debounce function that takes a function (fn) and a delay time (delay):

javascript
Copy code*/
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
// Step 2: Use AbortController
//Next, create an abort controller that can be used to abort the operation:

//javascript
//Copy code
const controller = new AbortController();
const signal = controller.signal;

function fetchData(url, signal) {
  return fetch(url, { signal })
    .then((response) => response.json())
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    });
}
//Step 3: Combine Debounce and AbortController
//Finally, combine the debounce function and the abort controller to create a debounced fetch function that can be cancelled:

//javascript
//Copy code
const debouncedFetch = debounce((url) => {
  controller.abort(); // Abort any previous request
  controller = new AbortController(); // Create a new controller for the new request
  fetchData(url, controller.signal);
}, 300); // 300ms debounce delay

// Example usage
const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  const url = `https://api.example.com/search?q=${event.target.value}`;
  debouncedFetch(url);
});
//Explanation:
//Debounce Function: The debounce function ensures that the fetchData function is not called too frequently. It waits for 300 milliseconds after the last call before invoking fetchData.
//AbortController: Before making a new fetch request, the previous one is aborted by calling controller.abort(). A new AbortController is then created for the new fetch request.
//Event Listener: The debouncedFetch function is used as an event listener for the input field, ensuring that fetch requests are debounced and previous requests are cancelled as needed.
