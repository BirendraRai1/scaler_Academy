//6 Dependency Injection Pattern
/*the dependency injection pattern enables classes to be more modular and testable along with
being loosely coupled.It does so by injecting dependencies into other classes instead of creating
the dependencies inside the class.
the code given below has two classes:-
Display:-It has a method called displayMessage that simply logs a message
Employee:-It has two variables and a method called "show" which takes in the method of class
display and passes the message as a parameter

*/ 

class Display{
    displayMessage(message){
        console.log(message)
    }
}
class Employee{
    constructor(display,name){
        this.display = display
        this.name = name
    }
    show(){
        this.display.displayMessage("Employee's name is "+this.name)
    }
}
const display = new Display()
const user = new Employee(display,"John")
user.show()


// 1>Notice that “display” is injected as a dependency by passing it as a parameter and 
// assigning it to “this.display”.
// 2>The injected “display” is used inside the “show” method, and the “displayMessage” is 
// called.
// 3>In the later stages, a new instance of class “Display” is created.
// 4>Along with it, the instance of class Employee is also created, and it passes two 
// parameters inside it. We have passed the “display” instance as a parameter as well, and 
// this is the dependency injection.
// 5>Finally, the method “show” is called on the “user” instance