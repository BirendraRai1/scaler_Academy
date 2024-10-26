//Promise.allSettled() is a helper function that runs multiple promises in parallel and aggregates
//the settled statuses(either fulfilled or rejected) into a result array

//when a promise is settled it means it is either resolved or rejected

//The returned promise will be resolved when all the promises in the input array are settled
//The returned promise will be resolved with an array of objects that each describes the status
//of each promise(either fulfilled or rejected) in the input array



PromiseAllSettled = function(input){
    const result = []
    let totalSettled = 0 //counter to track if all the promises are settled
    return new Promise((resolve,reject)=>{
        if(input.length==0)
            return resolve(result)
        input.forEach((item,index)=>{
            Promise.resolve(item)
            .then((value)=>{
                result[index] = {status:'fulfilled',value}
                totalSettled++
                if(totalSettled==input.length)
                        resolve(result)
            })
            .catch((err)=>{
                result[index] ={status:'rejected',err}
                totalSettled++
                if(totalSettled==input.length)
                    resolve(result)
            })
        })
    })
}


// const promise1 = PromiseAllSettled([
//     Promise.resolve(1),
//     new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//     Promise.resolve(3),
//     Promise.reject(4)
//     ])

// promise1
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))


// const promise2 = PromiseAllSettled([
//     new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
//     Promise.resolve(2),
//     '4',
//     new Promise((resolve) => setTimeout(() => resolve(1), 0)),
//     Promise.resolve(5),
//     ])
// promise2
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))

// const promise3 = PromiseAllSettled([
//     Promise.resolve(1),
//     new Promise((resolve, reject) => setTimeout(() => reject(2),
//     0)),
//     new Promise((resolve, reject) => setTimeout(() => reject(3),
//     2000)),
//     Promise.reject(4),
//     Promise.reject(5)
//     ])
// promise3
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))

// const promise4 = PromiseAllSettled([
//     null,
//     undefined,
//     new Promise((resolve) => setTimeout(() => resolve(2), 350)),
//     {},
//     'Hello'
//     ])
// promise4
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))

const promise5 = PromiseAllSettled([])
promise5
.then(value => console.log('Resolved with', value))
.catch(value => console.log('Rejected with', value))