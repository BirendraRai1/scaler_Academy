const {fork} = require('child_process')
const child = fork('./child.js')
child.on('message',(message)=>{
    console.log('Message from child:', message);
})
child.send({hello:'world'})
child.on('close',(code)=>{
console.log(`child process exited with code ${code}`)
})