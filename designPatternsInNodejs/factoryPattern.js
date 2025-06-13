//5.Factory Pattern
/* The factory pattern uses a single object that works as a factory to create new objects.
   This design pattern hides the implementation logic and enhances flexibility and loose
   coupling in terms of object creation.
   In the code below we have created a motorcycle class containing the name and the brand
 */

   class Motorcycle{
    constructor(name,brand){
        this.name = name
        this.brand = brand
    }
   }

   class MotorcycleFactory{
    createMotorcycle(type){
        switch(type){
            case "hunter":
                return new Motorcycle("Hunter 350","Royal Enfield")
            case "ronin":
                return new Motorcycle("Ronin","TVS Ronin")
            default :
                throw new Error("Invalid motorcycle type")
        }
    }
   }
   const factory = new MotorcycleFactory()
   const productA = factory.createMotorcycle("hunter")
   const productB = factory.createMotorcycle("ronin")
   console.log(productA.name)
   console.log(productB.name)