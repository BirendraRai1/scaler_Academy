const fs = require("fs")
setImmediate(()=>console.log("setImmediate"))
setTimeout(()=>console.log("Timer expired"),0)
Promise.resolve("Promise").then(console.log)
fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading CB")
})
process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nextTick"))
    setTimeout(()=>console.log("inside setTimeout process.nextTick"),0)
    console.log("next tick")
})
console.log("last line of the file")