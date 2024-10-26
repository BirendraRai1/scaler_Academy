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

async function fetchData(url, signal) {
  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    console.log("data fetched:", data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch Aborted");
    } else {
      console.error("Fetch error:", error);
    }
  }
}

function debouncedFetch() {
  let controller = null; // This will hold the current AbortController
  return debounce((query) => {
    console.log(`value of query is ${query}`);
    if (controller) {
      controller.abort(); // Abort the previous request if exists
    }
    controller = new AbortController(); // Create a new AbortController for the new request
    const { signal } = controller;
    // Start a new fetch request
    fetchData("https://restcountries.com/v3.1/name/" + query, signal);
  }, 3000); // debounce delay of 3000ms
}

const handleInput = debouncedFetch();

document.getElementById("searchInput").addEventListener("input", (e) => {
  handleInput(e.target.value);
});
