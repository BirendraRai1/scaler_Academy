//4 Singleton Pattern
/*The singleton pattern is one of the most popular design pattern in programming languages
  In nodejs the singleton pattern is used when there is a requirement for only one instance 
  of a class
*/ 
class Singleton{
    #name
    constructor(name){
        if(!Singleton.instance){
            Singleton.instance = this
            this.#name = name
            console.log("this inside constructor ",this)
        }
        return Singleton.instance
    }
    displayString(){
        console.log("This is a string",this.#name)
    }
}
const firstInstance = new Singleton('Alice')
const secondInstance = new Singleton('Bob')
console.log(firstInstance === secondInstance)
firstInstance.displayString()
secondInstance.displayString()

/*In the above code:

We have created a class titled “Singleton”.
Firstly, we have checked if an instance of the class exists, if it does not exist, we are assigning the current instance of the class to “Singleton.instance”. If the instance already exists, we simply return the existing instance. This ensures that all the instances of this class reference the same object.
Next, we have defined a method that displays a string on the console.
We have created two instances of the “Singleton” class: “firstInstance” and “secondInstance”.
We have checked if both instances reference the same object.
Lastly, we have called the “displayString” method on “firstInstance”.

*/ 
