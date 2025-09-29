process.on('message',(value)=>{
    console.log('Message from the parent (in child.js)',value)
    if(typeof value=='string'){
        process.send(value.toUpperCase())
    }else{
        process.send('Invalid input:Not a string')
    }
})
process.on('error',(err)=>{
    console.error('Error in child process:', err)
})
process.on('exit',(code)=>{
    console.log(`Child process exited with code ${code}`)
})
// This is the child process script that listens for messages from the parent process
// and responds with the uppercase version of the string received.
// If the input is not a string, it sends an error message back to the parent.
// It also handles errors and logs when the child process exits.
// The parent process can send messages to this child process, and it will respond accordingly.
// The child process can be started using the `fork` method from the `child_process`
// module in Node.js, which allows for the creation of a new Node.js process.
// The child process can communicate with the parent process using the `send` and `message`
// events. The parent can also listen for the `close` event to know when the child
// process has exited. This is useful for managing child processes in a Node.js application,
// especially when dealing with tasks that require parallel processing or handling
// multiple requests simultaneously.
// The child process can be used to offload heavy computations or tasks that can be
// performed asynchronously, allowing the main application to remain responsive.
// This is particularly useful in web applications where you want to handle multiple
// requests without blocking the event loop.
// The child process can also be used to run scripts or perform operations that are
// independent of the main application logic, such as data processing, file handling,