//7.Middleware Pattern
/*Middleware functions are those functions that perform tasks between the request and response
of an api call
*/ 
const express = require("express")
const app = express()
app.use((req,res,next)=>{
    console.log("This is a middleware")
    next()
})
app.get("/",(req,res)=>{
    res.send("Get request handled")
})
app.listen(4000,()=>{
    console.log("listening on port 4000")
})

// 1>When we hit the route “/”, the control of the Node.js code first passes through the 
// middleware.
// 2>When it encounters next(), it goes to the next middleware or a route handler, 
// in this case “/”.
// 3>Finally, the GET request is hit.