let name = {
  firstname: 'Akshay',
  lastname: 'Saini',
}

/*let printName = function () {
  console.log(this.firstname + ' ' + this.lastname)
}

let printMyName = printName.bind(name)
printMyName() //output Akshay Saini

//Now our task is to write our own implementation of bind method

Function.prototype.mybind = function (args) {
  let obj = this //this refers to printName()
  console.log(obj)
  return function () {
    obj.call(args)
  }
}

let printMyName2 = printName.mybind(name)
console.log(printMyName2)
printMyName2()*/

/*let printName = function (hometown, state) {
  console.log(
    this.firstname + ' ' + this.lastname + ' ,' + hometown + ' ,' + state
  )
}

let printMyName = printName.bind(name, 'Dehradun', 'Uttarakhand')
printMyName()

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1)
  return function () {
    obj.apply(args[0], params) //here call will not work
  }
}

let printMyName2 = printName.mybind(name, 'Dehradun', 'Uttarakhand')
printMyName2()*/

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      ' ' +
      this.lastname +
      ' ,' +
      hometown +
      ', ' +
      state +
      ' ,' +
      country
  )
}
let printMyName = printName.bind(name, 'Dehradun', 'Uttarakhand')
printMyName('India')

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1)
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2])
  }
}

let printMyName2 = printName.mybind(name, 'Dehradun', 'Uttarakhand')
printMyName2('India')
