const adminAuth = (req,res,next)=>{
    const token = "xyz"
    const isValidToken = "xyz"
    if(isValidToken ==token){
        next()
    }
    else{
        res.status(401).send("unauthorized Admin")
    }
}
const userAuth = (req,res,next)=>{
    const token = "xy"
    const isValidToken = "xyz"
    if(isValidToken ==token){
        next()
    }
    else{
        res.status(401).send("unauthorized user")
    }
}

module.exports = {
    adminAuth,
    userAuth
}