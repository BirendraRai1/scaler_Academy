/*Inheritance allows a class to inherit properties and methods from another class 
using the extends keyword
****/ 

class Vehicle{
    constructor(type){
        this.type = type
    }
    start(){
        console.log("vehicle started",this.type)
    }
}

class Car extends Vehicle{
    constructor(make,model,type){
        super(type)//it inherites the type properties of vehicle
        this.make = make
        this.model = model
    }
    description(){
        console.log(`description about car is ${this.make} ${this.model} ${this.type} `)
    }
}

const myVehicle = new Vehicle('scooter')
myVehicle.start()
const myCar = new Car('Toyotta','Corolla','car')
myCar.start()
myCar.description()