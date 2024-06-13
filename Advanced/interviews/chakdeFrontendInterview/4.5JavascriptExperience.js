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

//Q4 Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

//A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

//A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

//Please solve it without the built-in Array.flat method.

var flat = function (arr, n) {
  if (n == 0) return arr;
  let flattenarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flatten = flat(arr[i], n - 1);
      flattenarr.push(...flatten);
    } else {
      flattenarr.push(arr[i]);
    }
  }
  return flattenarr;
};
