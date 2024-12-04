/*Implement a function `get()` which is your own version of the
lodash’s `_.get()` method. This method is used to get the
value from the object based on the path given as input
*******/

function get(obj, path, defaultValue) {
  if (obj == null || typeof obj != "object") return defaultValue;
  let keys = [];
  if (!Array.isArray(path)) {
    path = path.replaceAll("[", ".");
    path = path.replaceAll("]", "");
    keys = path.split(".");
  } else keys = path;
  console.log("keys are ", keys);
  if (keys.length == 1)// We use `hasOwnProperty` method to check if a key exists on the object
  // Using `obj[currKey]` is not good, since there can be a falsy value as well like null, undefined, '' (which are completely valid)
  // So the aim should be to check if the property was defined on the object or not
    return obj.hasOwnProperty(keys[0]) ? obj[keys[0]] : defaultValue;
  if(obj.hasOwnProperty(keys[0]))
    return get(obj[keys[0]], keys.slice(1), defaultValue);//The method keys.slice(1) is used to create a new array containing all the elements of keys except the first one.
  return defaultValue;
}

const obj = {
  a: {
    b: "Hello",
    c: null,
    d: [1, 2, "World"],
    e: [{ name: "Peter Parker" }, { work: "Spiderman" }],
    h: {
      i: {
        j: "Iron Man",
        k: "Batman",
      },
    },
  },
  f: {
    g: undefined,
  },
};
console.log(get(obj, "a.b", "Key Not Found"));

console.log(get(obj, ["a", "h", "i", "k"], "Key Not Found"));
// Batman
console.log(get(obj, "a[b]", "Key Not Found"));
// Hello
console.log(get(obj, ["a", "e", "1", "work"], "Key Not Found"));
// Spiderman
console.log(get(obj, "a[d].1", "Key Not Found"));
// 2
console.log(get(obj, "a.d.2", "Key Not Found"));
// World
console.log(get(obj, "a.d.3", "Key Not Found"));
// Key Not Found
console.log(get(obj, "a[d][0]", "Key Not Found"));
// 1
console.log(get(obj, "a.e.0.name", "Key Not Found"));
// Peter Parker
console.log(get(obj, 'f.g', 'Key Not Found'));
// undefined
console.log(get(obj, 'f.g.h.i.j.k', 'Key Not Found'));
// Key Not Found