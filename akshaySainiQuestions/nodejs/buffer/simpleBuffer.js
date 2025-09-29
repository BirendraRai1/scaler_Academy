/*The Buffer module in Node.js is used to handle binary data.
Buffers are similar to arrays of integers but are fixed-length and correspond to raw memory allocations 
outside the V8 JavaScript engine
*
*****/ 

//Basic buffer Example
// const buf = Buffer.from("Hello, Node.js!")
// console.log(buf.toString())
// console.log(buf.length) // Output: 17
// console.log(buf[0]) // Output: 72 (ASCII code for 'H')

//# Creating Buffers



//Creating a buffer of a specific size
//1. Buffer.alloc()
/*Creates a new Buffer of the specified size, initialized with zeros.

This is the safest way to create a new buffer as it ensures no old data is present.
******/ 
// const buf2 = Buffer.alloc(10) // Creates a buffer of 10 bytes, initialized to zero
// console.log(buf2) // Output: <Buffer 00 00 00

//2. Buffer.allocUnsafe()
/*Creates a new Buffer of the specified size, but doesn't initialize the memory.

This is faster than Buffer.alloc() but may contain old or sensitive data.
Always fill the buffer before use if security is a concern.
*
*
******/ 

// const buffer2 = Buffer.allocUnsafe(10) // Creates a buffer of 10 bytes, uninitialized
// console.log("Buffer 2:",buffer2)
// buffer2.fill(0) // Fill the buffer with zeros
// console.log("Buffer 2 after fill:",buffer2) // Output: <Buffer 00

//3. Buffer.from()
/*Creates a new Buffer from various sources like strings,arrays or ArrayBuffer.This is the most flexible
way to create buffers from existing data
*/

//Create a buffer from a string
// const buffer3 = Buffer.from('Hello, World!') // Creates a buffer from a string
// console.log(buffer3)
// console.log(buffer3.toString()) // Output: Hello, World!

// //create a buffer from an array of integers
// const buffer4 = Buffer.from([65,66,67,68,69]) // Creates a buffer from an array of integers
// console.log(buffer4) // Output: <Buffer 41 42 43 44 45>
// console.log(buffer4.toString()) // Output: ABCDE

// //create a buffer from another buffer
// const buffer5 = Buffer.from(buffer4) // Creates a buffer from another buffer
// console.log(buffer5) // Output: <Buffer 41 42 43 44


/**
 * Using Buffers
 * Writing to buffers
 */
//create an empty buffer
// const buffer = Buffer.alloc(10) // Creates a buffer of 10 bytes, initialized to zero
// // Write a string to the buffer
// buffer.write('Hello') // Writes 'Hello' to the buffer
// console.log(buffer) // Output: Hello
// console.log(buffer.toString()) // Output: Hello
// //write bytes at specific positions
// buffer[5]=44 // Writes a comma at position 5
// buffer[6]=32 // Writes a space at position 6
// buffer.write('Node', 7) // Writes 'Node' starting at position 7
// console.log(buffer.toString()) // Output: Hello, Node


/*Reading from buffers

****/ 
// const buffer = Buffer.from('Hello, Node.js!') // Creates a buffer from a string
// // Read the entire buffer as a string
// console.log(buffer.toString()) // Output: Hello, Node.js!
// // Read a portion of the buffer (start at position 7,end before position 11)
// console.log(buffer.toString('utf-8', 7, 11)) // Output: Node
// // Read a single byte from the buffer
// console.log(buffer[0]) // Output: 72 (ASCII code for 'H')
// // Convert the ASCII code to a character
// console.log(String.fromCharCode(buffer[0])) // Output: H

/*iterating through buffers
Buffers can be iterated like arrays
**/
//create a buffer from a string
const buffer = Buffer.from('Hello, Node.js!') // Creates a buffer from a string
// Iterate through the buffer using a for loop
for (let i = 0; i < buffer.length; i++) {
    console.log(`Byte ${i}: ${buffer[i]} (${String.fromCharCode(buffer[i])})`)
}

for(const byte of buffer) {
    console.log(`Byte: ${byte} (${String.fromCharCode(byte)})`)
}
//Iterate using forEach
buffer.forEach((byte, index) => {
    console.log(`Byte ${index}: ${byte} (${String.fromCharCode(byte)})`)
})
