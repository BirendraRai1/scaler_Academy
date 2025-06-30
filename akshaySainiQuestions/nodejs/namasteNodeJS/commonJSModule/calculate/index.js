const {calculateMultiply} =require("./multiply")
const {calculateSum,x,z} = require("./sum")
module.exports = {calculateSum,calculateMultiply,x,z}


/*All the code inside a module is wrapped inside a function and then executed .So all the code 
*inside a module is private in nature.The only way to access it is via module.exports
*when we call the require("./multiply") or anything else
*
*all the code of the module is wrapped inside a function and that function is IIFE
*
*
*(function(){
    //All code of the module runs inside here
})()
*
*
*
*
*advantages of IIFE
    Immediately invokes the code
    Privacy
    (function(module,require){
        require("./path")
        function calculateMultiply(a,b){
            const result = a*b
            console.log(result) 
        }
        module.exports = {calculateMultiply}
    })(module.exports={})
*
*
*
*How are variables and functions private in different module
*IIFE && require(statement)
*How do you get access to module.exports
*NodeJS passes module as a parameter to the IIFE
*****************/ 