/*In JavaScript, the Object-Oriented Programming (OOP) concepts include:
1.Objects
An object is a collection of properties, often representing real-world entities. 
Properties are key-value pairs, where keys are strings (or symbols) and values can be any 
data type
*****/
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  start: function () {
    console.log("Car started");
  },
};

/*JavaScript introduced the class keyword in ES6, which acts as a blueprint for creating 
objects.
Classes encapsulate data (properties) and behaviors (methods).
*********/

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   start() {
//     console.log("Car started");
//   }
// }

// const myCar = new Car("Toyota", "Corolla", 2021);
// console.log(myCar.make)
// console.log(myCar.model)
// console.log(myCar.year)
// console.log(myCar.start())

//Encapsulation
/*Encapsulation means bundling data and methods that operate on that data within one 
unit (like a class).
This is achieved using closures or private fields to hide data.
Example with a private field (supported from ES2020)
**********/

class Car {
  #mileage = 0;// private field
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive(miles) {
    this.#mileage += miles;
  }
  getMileage() {
    return this.#mileage;
  }
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make);//Toyotta
console.log(myCar.model);//Corolla
console.log("mileage is", myCar.mileage);//undefined
console.log(myCar.drive(10));//sets the this.mileage to 10
console.log(myCar.getMileage()); //returns 10
