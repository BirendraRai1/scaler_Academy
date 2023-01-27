/*let name = {
  firstname: 'Akshay',
  lastname: 'Saini',
  printFullName: function () {
    console.log(this.firstname + ' ' + this.lastname)
  },
}
name.printFullName() //Akshay Saini
let name2 = {
  firstname: 'Sachin',
  lastname: 'Tendulkar',
}
name.printFullName.call(name2) //Sachin Tendulkar*/

let printFullName = function (homeTown, state) {
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + homeTown + ' , ' + state
  )
}

let name = {
  firstName: 'Akshay',
  lastName: 'Saini',
}

let name2 = {
  firstName: 'Sachin',
  lastName: 'Tendulkar',
}

printFullName.call(name, 'Dehradun', 'Uttarakhand')
//output Akshay Saini from Dehradun , Uttarakhand
printFullName.call(name2, 'Mumbai', 'Maharashtra')
//output Sachin Tendulkar from Mumbai , Maharashtra

printFullName.apply(name, ['Dehradun', 'Uttarakhand'])
printFullName.apply(name2, ['Mumbai', 'Maharashtra'])
let printMyName = printFullName.bind(name, 'Dehradun', 'Uttrakhand')
console.log(printMyName) //output It returns a function
console.log(printMyName()) //output Akshay Saini from Dehradun , Uttrakhand

let printSecondName = printFullName.bind(name2, 'Mumbai', 'Maharashtra')
console.log(printSecondName) //output It returns a function
console.log(printSecondName()) //output Sachin Tendulkar from Mumbai , Maharashtra
