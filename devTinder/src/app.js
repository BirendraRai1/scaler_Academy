const express = require('express')
const app = express()
// app.use('/',(req,res)=>{ //this callback is known as request handler and '/' matches all your route
//     res.send(`Namaste Akshay`)
// })

//we can use get api for /hello /hello/xyz and all these route will go inside this request handler
// app.use('/hello',(req,res)=>{
//     res.send('Hello hello hello')
// })


//we can use get api for /test /test/xyz and all other routes following /test/* these route will go inside this request handler
// app.use('/test',(req,res)=>{
//     res.send('hello from the server')
// })


//It means that b is optional here
// app.get('/ab?c',(req,res)=>{
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })

//It means that you can add as many b as you want .It must start with a and end with c
// app.get('/ab+c',(req,res)=>{
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })


//It means you write ab and then anything and then cd It will work
// app.get('/ab*cd',(req,res)=>{
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })

//It means bc is optional .It means /ad ,/abcd will work
// app.get('/a(bc)?d',(req,res)=>{
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })

//This regex means that any route containing letter a will work
// app.get(/a/,(req,res)=>{
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })

//This route means that you start with anything but ends with fly it will work
// app.get(/.*fly$/,(req,res)=>{
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })


//req.query inside the user route
// app.get('/user',(req,res)=>{
//     //http://localhost:3000/user?userId=101&password=testing
//     console.log('req.query is',req.query)
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })

//req.params inside the user route
// app.get('/user/:userId/:password',(req,res)=>{
//     //http://localhost:3000/101/testing
//     console.log('req.params is ',req.params)
//     res.send({firstName:"Akshay",lastName:"Saini"})
// })


//one route can have multiple route handlers
// app.use('/user',(req,res)=>{
//     console.log('handling the route user 1!')
//     res.send('response1')
// },(req,res)=>{
//     console.log('handling the route user 2 !')
//     res.send('response2')
// })


//here after the response is sent from the first route handler the tcp connection gets closed
//then the next() function is called so the next route handler is called and the console.log 
//is printed on the server and then res.send is called after the connection gets closed so it 
//will throw error on the server
// app.use('/user',(req,res,next)=>{
//     console.log('handling the route user 1!')
//     res.send('response1')
//     next()
// },(req,res)=>{
//     console.log('handling the route user 2!')
//     res.send('response2')
// })


//This will throw cannot GET /user on the browser even if it logs the console statement on the server because
//at the last route handler next() is called and it expects a route handler to be there after next 
// app.use('/user',(req,res,next)=>{
//     console.log('handling the route user 1')
//     next()
// },(req,res,next)=>{
//     console.log('handling the route user 2')
//     next()
// })


//we can also use array for the route handler
//app.use('/route',rH1,[rH2,rH3],rH4,rH5)


//the below route sends the output as 2nd route handler
// app.get('/user',(req,res,next)=>{
//     console.log('Handling the route user1!')
//     next()
// })
// app.get('/user',(req,res,next)=>{
//     console.log('Handling the route user2!')
//     res.send('2nd route handler')
// })



//This results in the output as cannot GET /user because it searches for the request handler
// in the second part of /user because next() is called there
// app.get('/user',(req,res,next)=>{
//     console.log('Handling the route user1!')
//     next();
// })
// app.get('/user',(req,res,next)=>{
//     console.log('Handling the route user2!')
//     next()
// })

// const {adminAuth,userAuth}=require("./middlewares/auth");
// app.use('/admin',adminAuth);
// app.post('/user/login',(req,res)=>{
//     res.send('User logged in successfully')
// })
// app.get('/user/data',userAuth,(req,res)=>{
//     res.send('User data Sent')
// });
// app.get('/admin/getAllData',(req,res)=>{
//     res.send("All Data Sent")
// })
// app.get('/admin/deleteUser',(req,res)=>{
//     res.send("Deleted a user")
// })


app.get('/getUserData',(req,res)=>{
    // try{
        throw new Error("davbcxjxjxkx")
        res.send('User Data Sent')
    // }catch(err){
    //     res.status(500).send("something went wrong")
    // }
})

//For passing the err the first argument should be err the second argument should be req 
//the third argument should be res and the fourth argument should be next

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong from getUserData")
    }
})


app.listen(3000,()=>console.log(`server is listening on port 3000`))