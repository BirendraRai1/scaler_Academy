/*var a = 100
{
  var a = 10
  let b = 20 //output 10 20 30 10
  const c = 30
  console.log(a)
  console.log(b)
  console.log(c)
}
console.log(a)*/

/*let b = 100
{
  var a = 10
  let b = 20
  const c = 30 //output 10 20 30 100
  console.log(a)
  console.log(b)
  console.log(c)
}
console.log(b)*/

/*const c = 100
{
  var a = 10
  let b = 20
  const c = 30
  console.log(a) //output 10 20 30 100
  console.log(b)
  console.log(c)
}
console.log(c)*/

/*var a = 20
{
  let a = 20 //legal shadowing since let is a block scoped
}*/

/*let a = 20
{
  var a = 20 //output illegal shadowing
  // syntaxError identifier 'a' has already been declared because var is not a block
  //scope
}
console.log(a)*/

/*let a = 20
function x() {  //output legal shadowing var is a function scope 10 20
  var a = 10
  console.log(a)
}
x()
console.log(a)*/

/*const a = 20 //block scope also forms lexical scope
{
  //output 200
  const a = 100
  {
    const a = 200
    console.log(a)
  }
}*/

/*const a = 20
{
  const a = 100 //output 100
  {
    console.log(a)
  }
}*/

const a = 20
{
  const a = 100 //output 20
  {
    const a = 200
  }
}
console.log(a)
