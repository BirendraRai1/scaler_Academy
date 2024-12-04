//Promise.any() is a helper function that runs multiple promises in parallel and resolves 
//to the value of the first successfully resolved promise from the input array of promises


//However if all the promises in the input array are rejected or if the array is empty then
//Promise.any() rejects with an Aggregate Error containing all the rejection reasons of the 
//input promises

const PromiseAny = function(input){
    const errors = []
    let totalRejected = 0 //counter to keep track if all the promises are rejected
    return new Promise((resolve,reject)=>{
        if(input.length==0)
            return reject(new AggregateError(errors,'Empty Array'))
        input.forEach((item,index)=>{
            Promise.resolve(item)
            .then((value)=>{
                resolve(value)
            })
            .catch((err)=>{
                errors[index] = err
                totalRejected++
                if(totalRejected == input.length)
                    reject(new AggregateError(errors,'All promise rejected'))
            })
        })
    })
}

// const promise1 = PromiseAny([
//     Promise.reject(1),
//     new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//     Promise.reject(3),
//     Promise.reject(4)
//     ])
// promise1
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))



// const promise2 = PromiseAny([
//     new Promise((_, reject) => setTimeout(() => reject(3),
//     2000)),
//     Promise.reject(2),
//     '4',
//     new Promise((_, reject) => setTimeout(() => reject(1), 0)),
//     Promise.reject(5),
//     ])
// promise2
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))


// const promise3 = PromiseAny([
//     Promise.reject(1),
//     new Promise((_, reject) => setTimeout(() => reject(2), 0)),
//     Promise.reject(3),
//     Promise.reject(4)
//     ])
// promise3
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))


// const promise4 = PromiseAny([
//     null,
//     undefined,
//     new Promise((resolve) => setTimeout(() => resolve(2), 350)),
//     {},
//     'Hello'
//     ])
// promise4
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))



// const promise5 = PromiseAny([])
// promise5
// .then(value => console.log('Resolved with', value))
// .catch(value => console.log('Rejected with', value))