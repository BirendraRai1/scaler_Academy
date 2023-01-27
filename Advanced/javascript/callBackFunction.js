//Callback Function
/*setTimeout(function () {
  console.log('timer')
}, 5000)

function x(y) {
  console.log('x')
  y()
}

x(function y() {
  console.log('y')
})*/

//output x y timer

/*document.getElementById('clickMe').addEventListener('click', function xyz() {
  console.log('button clicked')
})*/

/*let count = 0
document.getElementById('clickMe').addEventListener('click', function xyz() {
  console.log('button clicked', ++count)
})*/
//This count is not secure it can be modified by anyone
console.log('start')
function attachEventListeners() {
  let count = 0
  document.getElementById('clickMe').addEventListener('click', function xyz() {
    console.log('button clicked', ++count)
  })
}
attachEventListeners()
console.log('end')
