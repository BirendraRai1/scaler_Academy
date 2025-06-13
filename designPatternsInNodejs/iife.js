//1. Immediately Invoked Function Expressions (IIFE)
/*IIFE are functions that are invoked as soon as they are declared. 
This common design pattern can be used in Node.js for a couple of things:
Encapsulation: Code is encapsulated within local scope.
Privacy: Variables and functions cannot be used outside the scope.*/

(function (parameter) {
    const a = parameter;
    const b = 20;
    const answer = a * b;
    console.log(`The answer is ${answer}`);
  })(4);
