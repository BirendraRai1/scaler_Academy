//Implement a `pipe()` function which chains some `n` number
//of functions together to create a new function

//Piping in functional programming allows you to combine multiple functions into a single
//pipeline

function pipe(...funcs){
//Accepts lists of functions using rest operator
//Returns a new function to accept 'initialArgument' required
    return async function(initialArgument){
        //Initially our result will be the initialArgument
        let result = initialArgument
        //loop through each functions passed in sequence
        for(let fn of funcs){
        //update result since output of one func will be the input for other func
            result = await Promise.resolve(fn(result))
        }
        return result
    }
}

const getName = (input)=>input.name
const getUppercaseName = (input)=>input.toUpperCase()
const getUppercaseNameAsync = (input)=>{
    return new Promise(resolve=>setTimeout(()=>resolve(input.toUpperCase()),3000))
}
const getFirstName = (input)=>input.split(' ')[0]
const getReversedName = (input)=>input.split('').reverse().join('')

// const pipeAsync = pipe(
//     getName,
//     getUppercaseNameAsync,
//     getFirstName,
//     getReversedName
// );

// pipeAsync({name :'Async JSGuy'})
// .then((result)=>console.log(result))

const pipeSync = pipe(
    getName,
    getUppercaseName,
    getFirstName,
    getReversedName
)

pipeSync({name :'Sync JSGuy'})
.then((result)=>console.log(result))
