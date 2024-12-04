function is(a,b){
    // Handle special cases in numbers like NaN and zero-based value (+0 or -0)
    if(typeof a==='number' && typeof b==='number'){
        if(Number.isNaN(a) && Number.isNaN(b)){
            return true
        }
        // we first need to individually check if both `a` and `b` are zero-based value `0` (be it -0 or +0, so for that we use triple equals `===`)
        if(a===0 && b===0){
            return (1/a === 1/b)
        }
    }
    // If not a NaN or zero-based value (+0, or -0), we can use the same triple equals `===`
    return a === b
}

console.log(is(NaN, NaN));
//true

const obj = { b: 2 };
console.log(is(obj, obj));
//true

console.log(is(-0, +0));
//false

console.log(is(-0, 0));
//false

console.log(is(-0, -0));
//true

console.log(is(0, +0));
//true