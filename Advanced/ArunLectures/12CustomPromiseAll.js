//Promise.all() is a helper function provided by javascript to handle multiple promises at 
//once, in parallel and get the result in a single aggregated array .

//The returned promise will be resolved when all the promises in the input array are resolved
//If any of the promises in the input array is rejected the returned promise will be rejected
// with the reason for first rejected promise

//Promise.all maintains the order of results from the promises provided as input.So the results
//of a promise needs to be mapped in the output array exactly to the index to that of the promise
//in the input array

const PromiseAll = function(input){
    console.log("Entere here")
    //result arr to store the result of each promise
    const result = []
    //counter to keep track if all the promises are resolved
    let totalResolved = 0
    return new Promise((resolve,reject)=>{
        //If empty arr we can immediately resolve with []
        if(input.length==0)
            return resolve(result)
        for(let i=0;i<input.length;i++){
        //we need to wrap each elem in Promise.resolve().Since each elem can be any value other than a promise as well 
            Promise.resolve(input[i])
            .then((value)=>{
                result[i] = value
                totalResolved++
                if(totalResolved ==input.length)
                    resolve(result)
            })
            .catch((err)=>reject(err))
        }
    })
}


const promise3 = PromiseAll([Promise.resolve(1),
    new Promise((resolve, reject) => setTimeout(() => reject(2),
0)),
new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
Promise.reject(4),
Promise.reject(5)
])

promise3
.then(value => console.log('Resolved with 3', value))
.catch(value => console.log('Rejected with 3', value))


// const promise4 = Promise.all([
//     null,
//     undefined,
//     new Promise((resolve) => setTimeout(() => resolve(2), 350)),
//     {},
//     'Hello'
//     ])
// promise4
//     .then(value => console.log('Resolved with 4', value))
//     .catch(value => console.log('Rejected with 4', value))

// const promise2 = Promise.all([
//     new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
//     Promise.resolve(2),
//     '4',
//     new Promise((resolve) => setTimeout(() => resolve(1), 0)),
//     Promise.resolve(5),
//     ])
//     promise2
//     .then(value => console.log('Resolved with 2', value))
//     .catch(value => console.log('Rejected with 2', value))


const promise1 = Promise.all([
    Promise.resolve(1),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    Promise.resolve(3),
    4
    ])
promise1
    .then(value => console.log('Resolved with 1', value))
    .catch(value => console.log('Rejected with 1', value))