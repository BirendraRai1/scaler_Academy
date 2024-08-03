//write function called compute
const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a * b - c,
  D: { E: (a, b, c) => a * b * c },
};

const compute = (input, a, b, c) => {
  const temp = {};
  for (let keys in input) {
    console.log("input[i] is", input[keys]);
    if (typeof input[keys] === "object")
      temp[keys] = compute(input[keys], a, b, c);
    else temp[keys] = input[keys](a, b, c);
  }
  return temp;
};
console.log(compute(input, 1, 1, 1));

//implement your custom reduce polyfill
