/*function a() {
  console.log(b) //output 10
}
var b = 10
a()*/

/*function a() {
  c()
  function c() {
    console.log(b) //output 10
  }
}
var b = 10
a()*/

/*function a(){
  var b = 10
  c()
  function c(){
    console.log(b) //output 10
  }
}
a()*/

function a() {
  var b = 10
  c()
  function c() {
    console.log(b)
  }
}
a()
console.log(b) //refrenceError b is not defined
