const express = require('express')
const app = express()
app.use((req,res)=>{ //this is known as request handler
    res.send(`request handler is open for all routes`)
})
app.listen(3000,()=>console.log(`server is listening on port 3000`))