const fs = require('fs')
const express = require('express')
const multer = require('multer')
const app = express()

//use multer to handle multipart form data
const upload = multer()
app.post('/upload',upload.single("file"),(req,res)=>{
    const fileStream = fs.createWriteStream(`uploads/${req.file.originalname}`)
    fileStream.write(req.file.buffer)
    fileStream.end()
    fileStream.on('finish',()=>{
        res.send('file uploaded successfully')
    })
    fileStream.on("error",(err)=>{
        console.error('Error writing file :',err)
        res.status(500).send('file upload failed')
    })
})
app.listen(8000,()=>{
    console.log('server running on http://localhost:8000')
})