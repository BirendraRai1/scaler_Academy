const originalPush = Array.prototype.push
Array.prototype.setPushCb = function(callback){
    if(typeof callback=='function')
        this.onPush = callback
    else
        throw new TypeError(`callback must be a function`)
}

Array.prototype.push = function(...args){
    const result = originalPush.apply(this,args)
    if(this.onPush)
        this.onPush(args)
    return result
} 
const arr=[]
arr.setPushCb((item)=>console.log("item pushed",item))
arr.push(1)
arr.push(2,3)
console.log('arr is',arr)