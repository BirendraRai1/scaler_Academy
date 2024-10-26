function stringify(value) {
  const isTypeNullCategory = (value) => {
    if (value === null && typeof value === "object") return true;
    if (typeof value === "number" && Number.isNaN(value)) return true;
    if (typeof value === "number" && !Number.isFinite(value)) return true;
  };

  const isTypeIgnorableCategory = (value) => {
    if (typeof value === "symbol") return true;
    if (value === undefined || typeof value === "undefined") return true;
    if (typeof value === "function") return true;
  };

  if (isTypeNullCategory(value)) return `${null}`;

  if (isTypeIgnorableCategory(value)) return undefined;

  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value == "boolean") return `${value}`;
  if (typeof value === "object" && Array.isArray(value)) {
    const stringifiedResult = [];
    value.forEach((val) => {
      stringifiedResult.push(stringify(val));
    });
    return "[" + stringifiedResult.join(",") + "]";
  }
  if (typeof value === "object" && value != null && !Array.isArray(value)) {
    const stringifiedResult = [];
    const keys = Object.keys(value);
    for (const key of keys) {
      const result = stringify(value[key]);
      const stringifiedFormat = `"${key}":${result}`;
      stringifiedResult.push(stringifiedFormat);
    }
    return "{" + stringifiedResult.join(",") + "}";
  }
}

const testcase8 = {
  name: "Peter",
  age: 29,
  spiderman: true,
  arr: [1, 2, Symbol(), 4, [undefined, 8, 9, [10, () => {}, new Date()]]],
  address: {
    city: "New york",
    state: "NY",
  },
};


console.log(stringify(testcase8))
