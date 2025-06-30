//Modules protects their variables and functions from leaking as they are private in nature
console.log("Sum Module Executed");

var x = "Hello World";
 z = "Welcome commonJSModule" //common JS Module can run in non script mode

function calculateSum(a, b) {
  console.log("entered inside the calculateSum")
  const sum = a + b;
  console.log(sum);
}

console.log("module.exports",module.exports) //It returns an empty object

//module.exports =calculateSum  //if we have to export single variable ,functions or methods we do it by this way
module.exports = {calculateSum,x,z}
//these types of pattern are commonly known as common js module
