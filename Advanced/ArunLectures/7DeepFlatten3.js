//Implement a `flattenWithPrefix()` function which will flatten the
//original Object into a new Object. This function will also take
//`prefix` as an argument which will be a string denoting the
//representation of keys or properties to access the current
//value in the deeply nested object

function flattenWithPrefix(input){
    let result = {}
    for(let key in input){
        if(typeof input[key]=='object' && input[key]!=null){
            let flattenedObj = flattenWithPrefix(input[key])
            for(let k in flattenedObj){
                result[key +"."+k] = flattenedObj[k]
            }
        }
        else{
            result[key] = input[key]
        }
    }
    return result
}

const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            g: 5
        },
        h: null
    },
    j: 'Hi'
};

console.log(flattenWithPrefix(obj2))