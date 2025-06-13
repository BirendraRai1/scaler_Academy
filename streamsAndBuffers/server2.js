//Reading a file with Streams
const fs = require('fs')
const express = require('express')
const app = express()
app.get("/stream-file",(req,res)=>{
    const fileStream = fs.createReadStream('input.txt')
    res.setHeader('Content-Type','text/plain')
    fileStream.pipe(res)
    fileStream.on('error',(err)=>{
        console.error('Error reading file :',err)
        res.status(500).send('File not found')
    })
})
app.listen(8000,()=>{
    console.log('server running on http://localhost:8000')
})