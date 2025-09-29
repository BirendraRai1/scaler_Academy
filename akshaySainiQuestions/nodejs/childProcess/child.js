process.on('message',(message)=>{
    console.log('message from parent:', message);
    const result = message.hello.toUpperCase();
    process.send({result: result});
})