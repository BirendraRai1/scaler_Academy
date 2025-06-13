const placeholder = "_";
function curry(mainFn){
  return function curried(...args){
    if(args.length>=mainFn.length && !args.includes(placeholder))
      return mainFn(...args)
    return (...nextArgs)=>{
      const mergedArgs = args.map((arg)=>arg==placeholder && nextArgs.length>0?nextArgs.shift():arg)
      return curried(...mergedArgs,...nextArgs)
    }
  }
}
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
const _ = "_";
console.log("curriedJoin is",curriedJoin)

console.log(curriedJoin(_, 2)(_, 1)(3));
//output 3_2_1

//console.log(curriedJoin(_, _, _, 2)(1, 3)(4));
//output 1_3_4

//console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1));
//output 1_2_3

//console.log(curriedJoin(_, _, 3, 4)(1, _)(2, 5));
//output 1_2_3

//console.log(curriedJoin(_, _, 2)(_, 3)(_, 4)(_, _, 5)(6));
//output 6_3_2