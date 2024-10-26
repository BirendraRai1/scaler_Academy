/*suppose we have a utility function getAPI() which fetches data
  const getAPI() = (path,onfig)=>{.....} 
  const list1 = await getAPI('/list',{keyword:'learnWithChirag'}) 
  const list2 = await getAPI('/list',{keyword:'engineerChirag'})
  implement createGetAPIWithMerging to avoid unnecessary API calls
  const getAPIWithMerging = createGetAPIWithMerging(getAPI)
  getAPIWithMerging('/list',{keyword:'learnWithChirag'}).then(.....)
  1st call this will get API
  getAPIWithMerging('/list',{keyword:'learnWithChirag'})
  2nd call is identical to 1st call
  so getAPI is not called
  it resolves when 1st call resolves
  getAPIWithMerging('/list',{keyword:'engineerChirag'})
  3rd call is not identical so getAPI is called
  after 1000ms
  getAPIWithMerging('/list',{keyword:'learnWithChirag'}).then(.....)
  4th call is identical to 1st call
  but since after 1000ms getAPI is called
***************/ 

function createGetAPIWithMerging(getAPI) {
    const cache = new Map();

    return async function(path, config) {
        const cacheKey = JSON.stringify({ path, config });
        const currentTime = Date.now();

        // Check if the same API call is already in progress
        if (cache.has(cacheKey)) {
            const { promise, timestamp } = cache.get(cacheKey);

            // If the call was made within the last 1000ms, return the cached promise
            if (currentTime - timestamp < 1000) {
                console.log("got without resolving the promise")
                return promise;
            } else {
                // If more than 1000ms have passed, remove the cached entry
                cache.delete(cacheKey);
            }
        }

        // Create a new API call if no recent call is found
        const apiPromise = getAPI(path, config)
            .then((result) => {
                // Once the call is resolved, remove it from cache after 1000ms
                // setTimeout(() => cache.delete(cacheKey), 1000);
                console.log("got after resolving the promise")
                return result;
            })
            .catch((error) => {
                // In case of an error, remove the cached promise immediately
                cache.delete(cacheKey);
                throw error;
            });

        // Cache the current promise and timestamp
        cache.set(cacheKey, { promise: apiPromise, timestamp: currentTime });

        return apiPromise;
    };
}
// Explanation:
// Cache Structure:

// We use a Map to store the cache, where the key is a JSON string of the path and config (this uniquely identifies the API request).
// The value in the cache is an object that contains:
// promise: The in-progress API call's promise.
// timestamp: The time when the API call was made.
// Checking the Cache:

// Before making an API call, we check if the cache has an entry for the same path and config.
// If the request is found in the cache and was made within the last 1000ms, the cached promise is returned.
// If the request was made more than 1000ms ago, the cache is cleared, and a new API call is made.
// Handling API Responses:

// If the API call resolves, it is removed from the cache after 1000ms using setTimeout.
// If the API call fails, the cache is immediately cleared.
// New API Call:

// If no cached request is found, a new API call is made, and its promise is cached for future calls with the same parameters.
// Usage Example:
// javascript
// Copy code
// Assuming getAPI is defined as:
const getAPI = (path, config) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched ${config.keyword} from ${path}`);
        }, 500);
    });
};

// Create the merged API function
const getAPIWithMerging = createGetAPIWithMerging(getAPI);

// First call, API is called
getAPIWithMerging('/list', { keyword: 'learnWithChirag' }).then(console.log);

// Second call, identical to first, API is not called again
getAPIWithMerging('/list', { keyword: 'learnWithChirag' }).then(console.log);

// Third call, different API call
getAPIWithMerging('/list', { keyword: 'engineerChirag' }).then(console.log);

// Wait 1000ms, then make the identical call again, API will be called again
setTimeout(() => {
    getAPIWithMerging('/list', { keyword: 'learnWithChirag' }).then(console.log);
}, 1500);
//





