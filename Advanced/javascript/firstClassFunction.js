//First
/*var b = function (param1) {
  console.log(param1)
}
b(function () {})*/
//output
/*f(){

}*/

//second
/*var b = function (param1) {
  console.log(param1)
}

function xyz() {}
b(xyz)*/
//output
/*f xyz(){

}*/

//Third
/*var b = function (param1) {
  return function () {}
}
console.log(b())*/
//output
/*f(){

}*/

//Fourth
/*var b = function () {
  return function xyz() {}
}
console.log(b())*/
//output
/*ƒ xyz() {

}*/
