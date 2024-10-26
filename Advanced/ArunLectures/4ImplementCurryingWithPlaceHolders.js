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
        console.log("nextArgs is",nextArgs)
        const processedArgs = args.map((arg) => {
          // Note the case where `nextArgs.length` is less than `args.length`
          if (arg === placeholder && nextArgs.length > 0) {
            let nextArgs1 = nextArgs.shift()
            console.log("nextArgs1 is",nextArgs1)
            return nextArgs1;
          } else {
            return arg;
          }
        });
        console.log("processedArgs is",processedArgs)
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

console.log(curriedJoin(_, 2)(3, 1));
