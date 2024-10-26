//Given an input of array
//which is made of items with >=3 properties
// let items = [
//   { color: "red", type: "tv", age: 18 },
//   { color: "silver", type: "phone", age: 20 },
//   { color: "blue", type: "book", age: 17 },
// ];

//an exclude array made of key value pair
// const excludes = [
//   { k: "color", v: "silver" },
//   { k: "type", v: "tv" },
// ];

// function excludeItems(items, excludes) {
//   excludes.forEach((pair) => {
//     items = items.filter((item) => item[pair.k] === pair.v);
//     console.log(`items is ${items}`)
//   });
//   return items;
// }
//what does this function excludeItem does??
//console.log(excludeItems(items, excludes));
//solution for each pair of excludeItems for the first object in excludes array
//we will get { color: "silver", type: "phone", age: 20 } after first filter for the next
//iteration of excludes that is { k: "type", v: "tv" } it does not match { color: "silver", type: "phone", age: 20 }
//so it returns empty list

//Q2>how we can correct the logic that it prints { color: "blue", type: "book", age: 17 },
// function excludeItems(items, excludes) {
//   excludes.forEach((pair) => {
//     items = items.filter((item) => item[pair.k] !== pair.v);
//   });
//   return items;
// }
// console.log(excludeItems(items, excludes));
//but the above approach takes the time complexity O((length of excludes)*(length of items))
//can we reduce the time complexity
const item = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "book", age: 17 },
];

const exclude = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

function excludeItem(item, exclude) {
  const excludeSet = new Set(exclude.map((pair) => `${pair.k}:${pair.v}`));
  //console.log("excludeSet is", excludeSet);
  const result = [];
  for (const items of item) {
    let shouldExclude = false;
    for (const [key, value] of Object.entries(items)) {
      //console.log("key ,value is", `${key}:${value}`);
      if (excludeSet.has(`${key}:${value}`)) {
        shouldExclude = true;
        break; // Exit inner loop early if a match is found
      }
    }
    if (!shouldExclude) {
      result.push(items);
    }
  }
  return result;
}

// console.log("returning from excludeItem", excludeItem(item, exclude));

//the above inner for loop can also written with a filter method
// function excludeItems(item, exclude) {
//   const excludeSet = new Set(exclude.map((pair) => `${pair.k}:${pair.v}`));
//   return item.filter((items) => {
//     return !Object.entries(items).some(([key, value]) =>
//       excludeSet.has(`${key}:${value}`)
//     );
//   });
// }

//Q3>Can we use map method instead of set .Implementing the above method using map
// const item1 = [
//   { color: "red", type: "tv", age: 18 },
//   { color: "silver", type: "phone", age: 20 },
//   { color: "blue", type: "book", age: 17 },
// ];

// const exclude1 = [
//   { k: "color", v: "silver" },
//   { k: "type", v: "tv" },
// ];

// function excludeItems(items, excludes) {
//   const excludeMap = new Map();

//   // Populate the Map with the excludes
//   for (const { k, v } of excludes) {
//     if (!excludeMap.has(k)) {
//       excludeMap.set(k, new Set());
//     }
//     excludeMap.get(k).add(v);
//   }

//   const result = [];

//   for (const item of items) {
//     let shouldExclude = false;

//     for (const [key, value] of Object.entries(item)) {
//       if (excludeMap.has(key) && excludeMap.get(key).has(value)) {
//         shouldExclude = true;
//         break; // Exit inner loop early if a match is found
//       }
//     }

//     if (!shouldExclude) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(excludeItems(item1, exclude1)); // [{ color: "blue", type: "book", age: 17 }]

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};
console.log(getkey(obj, "a.b.c")); //[1,2,3]
console.log(getkey(obj, "a.b.c.0")); //1
console.log(getkey(obj, "a.b.c[1]")); //2
console.log(getkey(obj, ["a", "b", "c", 2])); //3
console.log(getkey(obj, "a.b.c[3]")); //undefined
console.log(getkey(obj, "a.c", "learnWithChirag")); //learnWithChirag

function getkey(obj, path, valueIfNotPresent) {
  if (!Array.isArray(path)) {
    path = path.replace(/\[([^\]]+)\]/g, ".$1");
    console.log(`typeof path is ${typeof path} ${path}`)
    path = path.split(".");
  }
  let currObj = obj;
  for (const ele of path) {
    if (!currObj[ele]) return valueIfNotPresent;
    currObj = currObj[ele];
   // console.log("currObj is",currObj)
  }
  return currObj;
}
