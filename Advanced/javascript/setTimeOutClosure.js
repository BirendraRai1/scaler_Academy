/*function x() {
  var i = 1
  setTimeout(function () {  //output
                            // Namaste Javascript
                            // 1
    console.log(i)
  }, 3000)
  console.log('Namaste Javascript')
}
x()*/

/*function x() {
  for (var i = 1; i <= 5; i++) {
    /*output
    Namaste Javascript
    6
    6
    6
    6
    6
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  console.log('Namaste Javascript')
}
x()*/

/*function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  console.log('Namaste Javascript')
}
x()
/* output
 Namaste Javascript
 1
 2
 3
 4
 5
 6
*/

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x)
      }, x * 1000)
    }
    close(i)
  }
  console.log('Namaste Javascript')
}
x()
/* output
Namaste Javascript
1
2
3
4
5
6*/
