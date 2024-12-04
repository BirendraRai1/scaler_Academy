//A `Proxy` object wraps another object, which can intercept
//and redefine fundamental operations like reading/writing for
//that original object

//(Proxy is in-built within Javascript)
const obj = {
    userName:'JSGuy',
    age:20,
    password:'Biru'
}

const proxyObject = new Proxy(obj,{
    get(target,property){
        if(property=='password')
            return 'Sorry Confidential Data!!'
        return target[property]
    }
})

console.log(proxyObject.password)
console.log(proxyObject.age)
console.log(proxyObject.userName)

function wrap(arr){
    return new Proxy(arr,{
        get(target,property){
            let index = Number(property)
            if(index<0){
                index +=target.length
            }
            return target[index]
        },
        set(target,property,value){
            let index = Number(property)
            if(index<0){
                index +=target.length
                if(index<0)
                    throw new Error('Index out of bound')
            }
            target[index] = value
            return true
        }
    })
}

let arr = ['a','b','c','d']
arr = wrap(arr)
console.log(arr[0])
console.log(arr[-1])
console.log(arr[-20])
arr[-3] = 'z'
console.log(arr)
arr[-5] = 'x'
console.log(arr)