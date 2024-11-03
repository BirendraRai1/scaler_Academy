//Abstract class examples
class Animal{
    constructor(name){
        this.name = name
    }
    //Abstract method meant to be overwritten by subClasses
    makeSound(){
        throw new Error("Abstract method 'make sound' must be implemented by subclass")
    }

    move(){
        console.log(`${this.name} is moving`)
    }

}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    makeSound(){
        console.log("Woof ! Woof!")
    }
}

class Cat extends Animal{
    constructor(name){
        super(name)
    }
    makeSound(){
        console.log("Meow ! Meow!")
    }
}

const myDog = new Dog("Buddy")
myDog.makeSound()
myDog.move()

const myCat = new Cat("Whiskers")
myCat.makeSound()
myCat.move()

const animal = new Animal()
animal.makeSound()