/*function x() {
  var a = 7
  function y() {   //output 7
    console.log(a)
  }
  y()
}
x()*/

/*function x() {
  var a = 7
  function y() {  //output 7 very important refer to notes
    console.log(a)
  }
  return y
}
var z = x()
console.log(z)
z()*/

/*function x() {
  var a = 7
  return function y() { //output 7 same as above with another syntax
    console.log(a)
  }
}*/

/*function x() {
  var a = 7
  function y() {  //output 100 see notes
    console.log(a)
  }
  a = 100
  return y
}
var z = x()
z()*/

function z() {
  var b = 900
  function x() {
    var a = 7
    function y() {
      console.log(a, b)
    }
    y()
  }
  x()
}
let result = z()
result()
