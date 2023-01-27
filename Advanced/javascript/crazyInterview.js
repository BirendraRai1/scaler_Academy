/*function outer() {
  var a = 10
  function inner() {
    console.log(a)
  }
  return inner
}
outer()() //output 10 inner() is closure

/* outer()() is similar to
var close = outer()
close()*/

/*function outer() {
  function inner() {
    console.log(a)
  }
  var a = 10
  return inner
}
outer()()*/ //output 10

/*function outer(){
  function inner(){ 
    console.log(a)
  }
  let a = 10
  return inner
}
outer()()*/ //output 10

/*function outer(b) {
  function inner() { 
    console.log(a, b)
  }
  let a = 10
  return inner
}
outer('hello world')()*/ //output 10 hello world
//inner() still forms a closure with a and b

/*function outest() {
  var c = 20
  function outer(b) {
    function inner() {
      console.log(a, b, c)
    }
    let a = 10
    return inner
  }
  return outer
}
outest()('hello world')()*/ //output 10 hello world 20

/*function outest() {
  var c = 20
  function outer(b) {
    function inner() {
      console.log(a, b, c)
    }
    let a = 10
    return inner
  }
  return outer
}
let a = 100
outest()('hello world')()*/ //output 10 hello world 20

/*function outest() {
  var c = 100
  function outer(b) {
    function inner() {
      console.log(a, b, c)
    }
    return inner
  }
  return outer
}
let a = 10
outest()('hello world')()*/ //output 10 hello world 100

/*function outest() {
  var c = 100
  function outer(b) {
    function inner() {
      console.log(a, b, c)
    }
    return inner
  }
  return outer
}
outest()('hello world')()*/ //output reference Error a is not defined

/*function counter() {
  var count = 0
  return function incrementCounter() {
    count++
    console.log(count)
  }
}
var counter1 = counter()
counter1()
counter1()*/
//output 1 2

/*function counter() {
  var count = 0
  return function incrementCounter() {
    count++
    console.log(count)
  }
}
var counter1 = counter()
counter1()
counter1()
var counter2 = counter()
counter2()
counter2()
counter2()
counter2()
counter2()*/
//output 1 2 1 2 3 4 5

/*function Counter() {
  var count = 0
  this.incrementCounter = function () {
    count++
    console.log(count)
  }
  this.decrementCounter = function () {
    count--
    console.log(count)
  }
}
var counter1 = new Counter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()*/
//output 1 2 1

function a() {
  var x = 0,
    z = 10
  return function b() {
    console.log(x)
  }
}
var y = a()
y()
//see the output while pausing debugger on line 145 for smart garbage collector while doing console.log(x) and console.log(z)
