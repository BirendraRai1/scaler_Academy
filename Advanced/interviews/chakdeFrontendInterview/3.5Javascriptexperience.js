//computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()
//the below solution is based on factory pattern
function computeAmount() {
  return new calculator();
}

function calculator() {
  console.log("this inside calculator", this);
  this.totalAmount = 0;
  this.lacs = function (amountToBeAdded) {
    this.totalAmount += amountToBeAdded * 100000;
    return this;
  };
  this.crore = function (amountToBeAdded) {
    this.totalAmount += amountToBeAdded * 10000000;
    return this;
  };
  this.thousand = function (amountToBeAdded) {
    this.totalAmount += amountToBeAdded * 1000;
    return this;
  };
  this.value = function () {
    return this.totalAmount;
  };
}

//2nd question

var obj = {
  helloWorld: function () {
    return `hello World,${this.name}`;
  },
  name: "Hello",
};
console.log(obj.helloWorld());

var obj2 = {
  helloWorld: obj.helloWorld,
  name: "Bye",
};
console.log(obj2.helloWorld());
console.log(obj2.helloWorld.call(obj));

/*Please create a function model(state,element) to bind state.value to the HTMLInputElement 
element 
const input = docum,ent.createElement("input")
const state = {value:"Hi"}
model(state,input)
console.log(input.value)
state.value = "dev"
console.log(input.value)
input.value = "engineerChirag"
input.dispatchEvent(new Event("change"))
console.log(state.value)*/

/*To create a function model(state, element) that binds state.value to the HTMLInputElement element, we need to set up a two-way data binding. This involves:

Updating the input element's value when state.value changes.
Updating state.value when the input element's value changes.
Here's how you can implement this:

javascript
Copy code*/
function model(state, element) {
  // Initialize the element's value with the state value
  element.value = state.value;

  // Create a property 'value' on the state object that updates the element's value
  Object.defineProperty(state, "value", {
    get() {
      return element.value;
    },
    set(newValue) {
      element.value = newValue;
    },
    configurable: true,
  });

  // Add an event listener to update the state value when the element's value changes
  element.addEventListener("change", () => {
    state.value = element.value;
  });
}

// Example usage
const input = document.createElement("input");
const state = { value: "Hi" };

model(state, input);
console.log(input.value); // Output: "Hi"

state.value = "dev";
console.log(input.value); // Output: "dev"

input.value = "engineerChirag";
input.dispatchEvent(new Event("change"));
console.log(state.value); // Output: "engineerChirag"
/*Explanation:
Initialization: The input element's value is set to state.value initially.
Define Property: Using Object.defineProperty, we define a getter and setter for state.value. The getter returns the current value of the input element, and the setter updates the input element's value whenever state.value changes.
Event Listener: An event listener is added to the input element to update state.value whenever the input element's value changes.
This ensures that changes to state.value are reflected in the input element, and changes to the input element's value are reflected in state.value.*/
