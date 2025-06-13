//2. Module Pattern
/*It is one of the most fundamental design pattern in nodejs.The module pattern is used to 
separate and encapsulate some code into different modules*/

const firstName = "Mark"
const displayFirstName = ()=>{
    return `Hi ${firstName}!`
}
const lastName = "Harris"
const displayLastName = ()=>{
    return `Hi ${lastName}!`
}

module.exports = {displayFirstName,displayLastName}