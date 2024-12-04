// function throttlePromises(funcsArr,max){
//     const result = []
//     let nextAPIBatch = 0
//     return new Promise((resolve,reject)=>{
//         (
//             function fetchAPIcalls(){
//                 const start = nextAPIBatch
//                 console.log("start is",start)
//                 const end = nextAPIBatch+max
//                 const nextAPICallsToMake = funcsArr.slice(start,end)
//                 const nextAPICallsPromises = nextAPICallsToMake.map(fn=>fn())
//                 Promise.all(nextAPICallsPromises)
//                 .then(data=>{
//                     result.push(...data)
//                     if(result.length==funcsArr.length)
//                         resolve(result)
//                     else{
//                         nextAPIBatch = end
//                         fetchAPIcalls()
//                     }
//                 })
//                 .catch((errors)=>{
//                     reject(errors)
//                 })
//             }
//         )()
//     })
// }

// const getRandomTimer = ()=>Math.round(Math.random()*1000)
// const getFullfillingPromise = (value)=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve(value),getRandomTimer())
//     })
// }
// const getRejectingPromise = (value)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>reject(value),getRandomTimer())
//     })
// }

// const input1 = new Array(10).fill(null).map((elem,index)=>()=>getFullfillingPromise(index))
// throttlePromises(input1,5)
// .then(data=>console.log("Resolved with data",data))
// .catch(error=>console.log("Rejected with",error))


/*I implemented Throttling promises by batching during a bulk upload process whichis helpful for managing load,
 especially when you’re handling large sets of data, like product uploads, where each 
 operation might involve database writes, image uploads, or API calls. Here’s where you 
 might consider using this approach in your bulk upload process:

Database Operations: If each product requires its own database entry (or update), it’s best to batch these operations. For example, if you have 1,000 products to upload, uploading them in smaller batches (e.g., 50 at a time) can reduce the load on the database and prevent rate-limiting issues.

Image and Asset Uploads: When products come with images or other media files, uploading too many files simultaneously can overwhelm storage services (like S3 or similar). Batching these uploads can help distribute the load, maintain service quality, and avoid hitting API rate limits.

API Calls to External Services: If the bulk upload process involves third-party services (e.g., inventory management, vendor checks), throttle calls to these APIs to avoid rate limits or request failures. Batching API calls also allows you to manage API usage quotas more efficiently.

Error Handling and Retry Logic: By batching uploads, it’s easier to handle and retry failed operations for each batch rather than individual items, which simplifies debugging and ensures more consistent success rates across uploads.
*
*
*******/ 


function uploadFunction(item) {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: item,
        body: `Data for ${item}`,
        userId: 1,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to upload ${item}`);
        return response.json();
      })
      .then((data) => {
        console.log(`Successfully uploaded ${item}`, data);
        return data;
      })
      .catch((error) => {
        console.error(`Error uploading ${item}:`, error);
        throw error;
      });
  }
  
  // Function to create upload functions for each item in dataArray
  function createUploadFunctions(dataArray) {
    return dataArray.map((item) => ()=>uploadFunction(item));
  }
  /*The inner arrow function () => uploadFunction(item) is created for each item in the 
  array.
This function doesn't execute uploadFunction immediately but returns a function that, when 
called, will execute uploadFunction(item)
  *
  *
  * *****/ 
  
  // Throttling function to limit concurrent uploads
  function throttlePromises(funcsArr, max) {
    const result = [];
    let nextAPIBatch = 0;
  
    return new Promise((resolve, reject) => {
      (function fetchAPIcalls() {
        const start = nextAPIBatch;
        const end = nextAPIBatch + max;
        const nextAPICallsToMake = funcsArr.slice(start, end);
  
        // Trigger batch of uploads
        const nextAPICallsPromises = nextAPICallsToMake.map((fn) => {
            console.log(`fn is`,fn)
            return fn()
        })
        Promise.all(nextAPICallsPromises)
          .then((data) => {
            result.push(...data);
            if (result.length === funcsArr.length) resolve(result);
            else {
              nextAPIBatch = end;
              fetchAPIcalls();
            }
          })
          .catch((error) => reject(error));
      })();
    });
  }
  
  // Running the throttling upload process
  const dataArray = Array.from({ length: 50 }, (_, i) => `Product ${i + 1}`);
  console.log('dataArray is',dataArray)
  const maxConcurrentUploads = 5; // Limit of 5 uploads at once
  const uploadFunctions = createUploadFunctions(dataArray);
  
  throttlePromises(uploadFunctions, maxConcurrentUploads)
    .then((results) => console.log("All uploads completed:", results))
    .catch((error) => console.error("Error during uploads:", error));