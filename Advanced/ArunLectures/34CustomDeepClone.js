function deepClone(obj) {
  if (obj == null || typeof obj != "object") return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

const obj = {
  name: "Peter",
  age: 29,
  spiderman: true,
  movies: ["Spiderman", "Amazing Spiderman", "Far From Home"],
  address: {
    city: "New york",
    state: "NY",
    temp: ["California", "Alabama", "Florida"],
  },
};

const clonedObj = deepClone(obj)
obj.movies[2] = "Shershah"
console.log("obj is",obj)
console.log("clonedObj is",clonedObj)
