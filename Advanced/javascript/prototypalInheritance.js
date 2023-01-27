let arr = ['Akshay', 'Aditya']
let object = {
  name: 'Akshay',
  city: 'Dehradun',
  getIntro: function () {
    console.log(this.name + ' from ' + this.city)
  },
}

function fun() {}
/*arr.__proto__
[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]*/

/*arr.__proto__ is similar to Array.prototype


/*arr.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}*/

/*arr.__proto__.__proto__ is similar to Array.prototype.__proto__ or to Object.prototype or object.__proto__*/

/*arr.__proto__.__proto__.__proto__
null*/

/*arr.__proto__.__proto__.__proto__ is similar to Array.prototype.__proto__.__proto__ or Object.prototype.__proto__ or object.__proto__.__proto__*/

/*fun.__proto__ is similar to Function.prototype
ƒ () { [native code] }*/

/*fun.__proto__.__proto__ is similar to Function.prototype.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}*/

/*fun.__proto__.__proto__.__proto__ is similar to Function.prototype.__proto__.__proto__
null*/

let object2 = {
  name: 'Aditya',
}

//never do this just for demonstration purpose it will cause a huge performance issue
object2.__proto__ = object
/*{name: 'Akshay', city: 'Dehradun', getIntro: ƒ}*/

console.log(object2.name) //Aditya
console.log(object2.city) //Dehradun
console.log(object.getIntro()) //Akshay from Dehradun
console.log(object2.getIntro()) //Aditya from Dehradun

Function.prototype.myBind = function () {
  console.log('I am here')
}
console.log(fun.__proto__.myBind()) //I am here
console.log(fun.myBind()) //I am here
