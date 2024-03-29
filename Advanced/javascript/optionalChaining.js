Q1>what is optional Chaining?
Ans>Optional chaining lives up to its name. In the chain of object property access we can check that each value is not undefined or null. This check can be extremely useful when accessing deeply nested object values. It has been a highly anticipated feature and it keeps you from having to do numerous null checks

//https://www.freecodecamp.org/news/javascript-optional-chaining/

q1>let a = {
  b:{
      d:2,
      c:3
  },
  e:1
}
sol>console.log(a?.b?.f)
console.log(a?.c?.f)
console.log(a?.b?.d)