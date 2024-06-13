//what will be the output of the following
// console.log("A");
// setTimeout(() => console.log("B"))[("C", "D")].forEach((x) => console.log(x));
// console.log("E");

//There are two callbacks one in the foreach and one in the setTimeout.One executes then
//and there and other doenot executes then and there
/*the answer is it depends where the callback is passed to.In forEach we are iterating over 
the array so it will not wait for anything.It will execute as soon as the array is given to
forEach.THe core functionality of setTimeout is to wait .After the wait time is over it executes
the callback function.
*/
//Q2 obj
const obj = [
  {
    key: "sample1",
    data: "Data1",
  },
  {
    key: "sample1",
    data: "Data1",
  },
  {
    key: "sample2",
    data: "Data2",
  },
  {
    key: "sample1",
    data: "Data1",
  },
  {
    key: "sample3",
    data: "Data1",
  },
  {
    key: "sample4",
    data: "Data1",
  },
];

let output = {};
obj.forEach((item) => {
  if (output[item.key]) {
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});

console.log("output is", output);

//Q3 const add = (a,b)=>a+b memoize add function

//Q4 flatten deeply nested array
