const placeholder = "_";
function curry(mainFn) {
  return function curried(...args) {
    console.log("args in curried",args)
    const hasRequiredArgs = args.length >= mainFn.length;
    const hasAnyPlaceholders = args
      .slice(0, mainFn.length)
      .includes(placeholder);
    const doesArgsSatisfy = hasRequiredArgs && !hasAnyPlaceholders;
    if (doesArgsSatisfy) {
      return mainFn(...args);
    } else {
      // We return a function to process next arguments passed to satisfy the conditions
      return (...nextArgs) => {
        // replace `placeholder` in `args` with the value in `nextArgs`
        console.log("nextArgs is",nextArgs,"args is",args)
        const processedArgs = args.map((arg) => {
          // Note the case where `nextArgs.length` is less than `args.length`
          if (arg === placeholder && nextArgs.length > 0) {
            console.log('inside if of nextArgs',nextArgs[0])
            let nextArgs1 = nextArgs.shift()
            console.log("nextArgs1 is",nextArgs1)
            return nextArgs1;
          } else {
            return arg;
          }
        });
        console.log("processedArgs is",processedArgs)
        console.log("nextArgs is after map",nextArgs)
        // The main aim here was to replace placeholders band merge the arguments.
        const mergedArgs = [...processedArgs, ...nextArgs];
        console.log("mergedArgs is",mergedArgs)
        return curried(...mergedArgs);
      };
    }
  };
}
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
const _ = "_";

//console.log(curriedJoin(_, 2)(_, 1)(3));
//output 3_2_1

//console.log(curriedJoin(_, _, _, 2)(1, 3)(4));
//output 1_3_4

//console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1));
//output 1_2_3

//console.log(curriedJoin(_, _, 3, 4)(1, _)(2, 5));
//output 1_2_3

//console.log(curriedJoin(_, _, 2)(_, 3)(_, 4)(_, _, 5)(6));
//output 6_3_2