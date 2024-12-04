function createAPICallCaching() {
    const cache = new Map();
    const CACHE_TIME_LIMIT = 1000; // Cache expiry time in milliseconds
    const CACHE_SIZE_LIMIT = 5; // Cache size limit

    return function (path, config) {
        const hash = getHashForAPI(path, config); // Generate a unique hash

        if (cache.has(hash)) {
            const apiEntry = cache.get(hash);
            // Check if cache entry is valid
            if (Date.now() - apiEntry.startTime <= CACHE_TIME_LIMIT) {
                console.log(`Cache hit for ${hash}`);
                return apiEntry.promise; // Return the cached promise
            }
            // Remove expired cache entry
            cache.delete(hash);
        }

        // If not in cache, create a new API call
        console.log(`Fetching new API for ${hash}`);
        const promise = fetchAPIMock(path, config); // Create a new promise
        
        cache.set(hash, { promise, startTime: Date.now() });
        // Enforce cache size limit
        if (cache.size > CACHE_SIZE_LIMIT) {
            const oldestHash = cache.keys().next().value; // Get the oldest cache entry
            cache.delete(oldestHash); // Remove the oldest entry
            console.log(`Removed oldest cache entry: ${oldestHash}`);
        }
        

        return promise; // Return the promise
    };
}

    // Helper function to generate a unique hash
    function getHashForAPI(path, config) {
        const keys = Object.keys(config).sort(); // Sort keys to ensure consistent hashing
        return path + keys.map((key) => `?${key}=${config[key]}`).join("&");
    }

    // Mock API call
    function fetchAPIMock(path, config) {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve(`Response for ${path} with config ${JSON.stringify(config)}`);
            }, 1200)
        );
    }




/*Why Promise { <pending> }?
when you console.log(getAPIWithCaching('/search1', { keyword: 'abc' }))
Your function getAPIWithCaching is async, so it returns a Promise.
Logging the Promise directly without awaiting its resolution will display it in a pending state.
*
*
*Use await inside an asynchronous context (e.g., async function) to wait for the promise 
to resolve.
Alternatively, use .then() to handle the resolved value.
*
****/ 

// getAPIWithCaching('/search1', { keyword: 'abc' }).then((response) => {
//     console.log("API Response:", response);
//   }).catch((error) => {
//     console.error("Error fetching data:", error);
//   });
const getAPIWithCaching = createAPICallCaching();


getAPIWithCaching("/search1", { keyword: "abc" }).then((response) => console.log(response));
getAPIWithCaching("/search1", { keyword: "abc" }).then((response) => console.log(response));
getAPIWithCaching("/search3", { keyword: "abc" }).then((response) => console.log(response));
getAPIWithCaching("/search4", { keyword: "abc" }).then((response) => console.log(response));
getAPIWithCaching("/search5", { keyword: "abc" }).then((response) => console.log(response));
getAPIWithCaching("/search6", { keyword: "abc" }).then((response) => console.log(response));
getAPIWithCaching("/search1", { keyword: "abc" }).then((response) => console.log(response));

