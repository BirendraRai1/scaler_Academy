require("./xyz.js")//if you are not using .js extension it is by default considered as xyz.js extension
//const calculateSum = require("./sum.js")//After exporting the sum module we have to require the function calculateSum which is protected in another module
// const {calculateSum,x,z} = require("./calculate/sum.js")
// const {calculateMultiply} = require("./calculate/multiply.js")
const {calculateMultiply,calculateSum,x,z}= require("./calculate")
let name = "Node JS 03"
let a = 5
let b = 10
let c = a+b
console.log(name)
console.log(c)
//console.log(global)
console.log(this)
console.log("x is",x)
console.log("z is",z)
//console.log(globalThis)
calculateSum(a,b)
calculateMultiply(a,b)
console.log(global===globalThis)

/*window is not given by v8 . It is given by browser . Global is not part of v8 engine .Global
*is outside and it is one of the super power api which is given to us by nodejs.global object
*is not equal to this in case of nodejs as the case of browser where this is equal to window 
*self frames
*For all the different names of global inside nodejs and window .ECMASCRIPT 2020 provided
*globalThis common in case of browser and nodejs
*
*
*
*
*
*
*When we require a module into another module it will execute the code of that module but we
*cannot access the variables ,methods and functions from one module into another since variables
*methods and functions are by default protected into that particular module
*
*
*
*
*
*
*there are two types of modules common JS module and ES module
common JS module
    module.exports
    require
    by default used in nodejs
    older way
    synchronous
    non strict mode
ES Module
    {
        type:"module"
    }
    import
    export
    by default used in react
    newer way
    have an option for asynchronous
    strict mode
******/ 