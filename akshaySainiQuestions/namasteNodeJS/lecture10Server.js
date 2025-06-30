const http = require("http")
const server = http.createServer(function(req,res){
    if(req.url ==='/getSecretData')
        res.end("There is no secret Data")
    res.end("hello world")
})
server.listen(7777)