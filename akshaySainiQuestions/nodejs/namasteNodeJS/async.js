const fs = require("fs")
const https = require("https")
console.log("Hello World")
var a = 1078698
var b = 20986
https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data successfully")
})
setTimeout(()=>{
    console.log("setTimeout called after 5 secs")
},5000)
fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("File data",data)
})
function multiplyFn(x,y){
    const result = a*b
    return result
}
var c = multiplyFn(a,b)
console.log("Multiplication result is :",c)