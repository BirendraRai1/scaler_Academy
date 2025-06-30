const crypto = require("crypto")
console.log("Hello World")
var a = 1078698
var b = 20986
//pbkdf2 means password-Based key derivation function 2

//Synchronous Function -Will block the main thread -dont use it
crypto.pbkdf2Sync("password","salt",50000,50,"sha512")
console.log("first key is generated")




//Async Function
crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("second key is generated")
})
function multiplyFn(x,y){
    const result = a*b
    return result
}
var c = multiplyFn(a,b)
console.log("multiplication result is:",c)