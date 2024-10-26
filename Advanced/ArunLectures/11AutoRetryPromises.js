//Implement a 'fetchWithAutoRetry()' function which will automatically retry to fetch when error
//occurs until the maximum retry limit is reached

//Implementation
//How can we handle the failure case ?? We know that making an api call is always asynchronous
//and it will return a promise so when the promise gets rejected it means there is a failure
//and we need to handle the auto retry logic in the catch block




//'fetchData' is our mocked function which will make api call
function fetchWithAutoRetry(fetchData,retryLimit){
    //we need to return a promise , since fetching data is always asynchronous
    return new Promise((resolve,reject)=>{
        (
            //IFEE function expression since we need to make the first api call
            function retryFetch(){
                //if successful, we resolve with the data
                console.log(`fetchData is`,fetchData)
                fetchData()
                .then(data=>resolve(data))
                .catch((err)=>{
                    //on error , we can retry the API call until retryLimit
                    console.log('retryLimit is',retryLimit)
                    if(retryLimit-- >0){
                        retryFetch()
                    }
                    else{
                        reject(err)
                    }
                })
            }
        )()
    })
}

const fetchData = ()=>{
    //Mocking the API call using a simple counter logic
    let count = 0
    return ()=>{
        console.log("count is",count)
        if(count ++===4){
            console.log("count inside if",count)
            return Promise.resolve("Data Successful")
        }
            
        else
            return Promise.reject("Data Rejected")
    }
}

// fetchWithAutoRetry(fetchData(),3)
// .then(console.log)
// .catch(console.log)

fetchWithAutoRetry(fetchData(),5)
.then(console.log)
.catch(console.log)