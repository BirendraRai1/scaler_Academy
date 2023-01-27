/*console.log(b) //output undefined because b is assigned memory inside global object even before initialization
var b = 100*/

/*console.log(a) // output Cannot access 'a' before initialization because a is also assigned different memory space even before initialization but not the global object and a is in a temporal dead zone and you can access it after initialization
let a = 10*/

/*console.log(x) // output Cannot access 'a' before initialization this also gives refrenceError but it is different from above one here memory is not allocated for x */

/*let a = 10
var b = 100
console.log(window.a) // output undefined because a is allocated different memory space than the global object whereas b is allocated global object memory space and window is a global object in case of browser
console.log(window.b) // output 100*/

/*let a = 10
let a = 100 // output syntaxError identifier 'a' has already been declared*/

/*let a = 10
var a = 100 //output syntaxError identifier 'a' has already been declared*/

/*console.log('hello world')
var b = 10
var b = 100 //output hello world*/

/*let a
const b = 1000
a = 10
console.log(a) //output 10*/

/*let a
const b
b = 1000
console.log(a) //output SyntaxError: Missing initializer in const declaration*/

let a = 1900
const b = 1000
b = 10000
a = 10
console.log(a) //output TypeError: Assignment to constant variable.
