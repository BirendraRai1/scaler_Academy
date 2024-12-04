/*Implement a Custom Prototype method for Strings in js. This method when invoked using a 
string, should console “Hello, {string}”
******/

String.prototype.addString = function(str){
    return `Hello ${this}`
}

let str = "I am Jitendra"
console.log(str.addString())