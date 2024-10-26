function Spiderman(name){
    this.name = name
}
const spidey = new Spiderman("Peter Parker")
Spiderman.prototype.toString = function(){
    return `${this.name}`
}
console.log(spidey.toString())

const arr = [1,2,3]
console.log("arr is",Object.prototype.toString.call(arr))

const date = new Date()
console.log("Date is",Object.prototype.toString.call(date))

const regex = new RegExp()
console.log("regex is",Object.prototype.toString.call(regex))

const num = new Number(10)
console.log("num is",Object.prototype.toString.call(num))

const str = new String("Hello World")
console.log("str is",Object.prototype.toString.call(str))

const bool = new Boolean(false)
console.log("bool is",Object.prototype.toString.call(bool))

const map = new Map()
console.log("Map is",Object.prototype.toString.call(map))

const set = new Set()
console.log("set is",Object.prototype.toString.call(set))

//const fileReader = new FileReader()
//console.log("fileReader is",Object.prototype.toString.call(fileReader))
//The error you're encountering, ReferenceError: FileReader is not defined, occurs 
//because FileReader is a browser-specific API and is not available in Node.js by default

const arraybuffer = new ArrayBuffer()
console.log("arraybuffer is",Object.prototype.toString.call(arraybuffer))

const dataView = new DataView(new ArrayBuffer())
console.log("dataView is",Object.prototype.toString.call(dataView))

const uint8Arr = new Uint8Array()
console.log("unit8Arr is",Object.prototype.toString.call(uint8Arr))