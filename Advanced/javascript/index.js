var a = 10
function b() {
  var x = 10
}
console.log(window.a)
console.log(a)
console.log(this.a)
console.log(x) //reference error x is not defined it searces for x in global space
