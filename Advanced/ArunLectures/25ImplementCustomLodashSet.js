function set(obj, path, value) {
  if (obj == null || typeof obj != "object") return;
  let keys = [];
  if (!Array.isArray(path)) {
    path = path.replaceAll("[", ".");
    path = path.replaceAll("]", "");
    keys = path.split(".");
  }
  else
    keys = path
  if (keys.length == 1) return obj[keys[0]] = value;
    console.log("obj and currkey is",obj,keys[0])
    if (!obj.hasOwnProperty(keys[0])) {
      // --> There can be 2 possibilities that the currKey can be either an object (or) array
      console.log("entered here")
      let nextkey = keys[1];
      let number = isNaN(Number(nextkey));
      obj[keys[0]] = number ? {} : [];
    }
    set(obj[keys[0]], keys.slice(1), value);
}

const obj = {
  a: {
    b: "Hello",
    e: [{ name: "Peter Parker" }],
    h: {
      i: {
        j: "Iron Man",
      },
    },
  },
  f: {
    g: undefined,
  },
};

//set(obj, 'a.c', null);
//set(obj, 'a.d[0]', 1);
set(obj, 'a[h].i[k]', 'Batman');
console.log("obj is",obj)
