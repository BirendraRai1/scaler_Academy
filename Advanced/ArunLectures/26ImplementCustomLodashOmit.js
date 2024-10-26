function omit(obj, path) {
  if (obj == null || typeof obj != "object") return;
  let keys = [];
  if (!Array.isArray(path)) {
    path = path.replaceAll("[", ".");
    path = path.replaceAll("]", "");
    keys = path.split(".");
  } else keys = path;
  if (keys.length == 1) {
    if (Array.isArray(obj[keys[0]])) return obj[keys[0]].splice(keys[0], 1);
    else return delete obj[keys[0]];
  }
  omit(obj[keys[0]], keys.slice(1));
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

omit(obj, "a.h.i.k");
console.log("obj is", obj);

omit(obj, 'a[d][1]');
console.log("second obj is",obj)
