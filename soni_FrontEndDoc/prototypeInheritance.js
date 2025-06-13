function Person(name){
    this.name = name
}
Person.prototype.hello = function(){
    return `Hello ${this.name}`
}

console.log("Person.prototype.constructor",Person.prototype.constructor)
/*Person is ƒ Person(name){
    this.name = name
}
*/ 
//child function
function Developer(name,title){
    console.log("This inside Developer",this)
    Person.call(this,name)
    this.title = title
}
 // Override person prototype in Developer's prototype
Developer.prototype = Object.create(Person.prototype)
console.log("Developer.prototype.constructor ",Developer.prototype.constructor)
// Developer.prototype.constructor  ƒ Person(name){
//     this.name = name
// }


// Reset the constructor property of Developer's prototype
Developer.prototype.constructor = Developer
console.log("After resetting Developer.prototype.constructor ",Developer.prototype.constructor)

// After resetting Developer.prototype.constructor  ƒ Developer(name,title){
//     Person.call(this,name)
//     this.title = title
// }


// Now you can add any methods in developer prototype 
Developer.prototype.getTitle = function(){
    return this.title
}

console.log("Person is",Person)
const PersonObj = new Person("Biru")
console.log(PersonObj.hello())

console.log("Developer is",Developer)
const DeveloperObj = new Developer("Moni","Physics")
console.log(DeveloperObj.hello())
console.log("DeveloperObj.getTitle",DeveloperObj.getTitle())