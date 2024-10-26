//create a fetchWithAutoRetry(fetcher,count) which automatically fetch again when error
//happens until the maximum count is met

async function fetchWithAutoRetry(fetcher, maximumRetryCount = 1) {
  if (maximumRetryCount > 0) {
    console.log("maximumRetryCount is", maximumRetryCount);
    try {
      console.log("inside try block ");
      const result = await fetcher(maximumRetryCount);
      return result;
    } catch (e) {
      console.log("inside catch ", e);
      const result = await fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
      return result;
    }
  }
  //throw new Error("max retry count reached");
}

const p1 = () => new Promise((resolve, reject) => resolve("p1"));
const p2 = (maximumRetryCount) =>
  new Promise((resolve, reject) => {
    //first code  // if (Math.random() > 0.5) {
    //   resolve("p2");
    // } else {
    //   reject("p2");
    // }

    //second code
    console.log(`maximumRetryCount is ${maximumRetryCount}`)
    if (maximumRetryCount == 1) 
      resolve("resolved p2");
    reject("rejected p2");
  });

(async function a() {
  try {
    const result = await fetchWithAutoRetry(p2, 5);
    console.log("result is ", result);
  } catch (e) {
    console.error("error from fetchRetry==", e);
  }
})();

//implement LRU cache -Chrome storage automatic eviction
