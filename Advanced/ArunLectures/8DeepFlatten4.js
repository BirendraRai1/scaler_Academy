function flatten(input) {
  if (typeof input != "object" || input == null) return input;
  if (Array.isArray(input)) return flattenArray(input);
  else return flattenObj(input);
}

function flattenArray(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      const flattenedArr = flattenArray(input[i]);
      result = [...result, ...flattenedArr];
    } else if (typeof input[i] == "object" && input[i] != null) {
      const flattenedObj = flattenObj(input[i]);
      result = [...result, flattenedObj];
    } else result = [...result, input[i]];
  }
  return result;
}

function flattenObj(input) {
  let result = {};
  for (let key in input) {
    if (Array.isArray(input[key])) result[key] = flattenArray(input[key]);
    else if (
      !Array.isArray(input[key]) &&
      typeof input[key] == "object" &&
      input[key] != null
    )
      result = { ...result, ...flattenObj(input[key]) };
    else result[key] = input[key];
  }
  return result;
}

const input1 = {
  a: 1,
  b: 2,
  c: [3, { d: 4, e: { f: null } }],
  h: {
    i: 6,
    j: {},
    k: undefined,
  },
  l: "Hi",
};

const input2 = [
  1,
  2,
  [3, { d: 4, e: undefined, nestedArr: [[5, [6]], [7]] }],
  {
    f: 8,
    g: null,
    h: {
      i: {},
    },
  },
];
console.log(flatten(input2));
