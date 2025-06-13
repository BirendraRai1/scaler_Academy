const fs = require("fs")
const http = require("http")

const server = http.createServer()
server.on('request',(req,res)=>{
    //1st way reading all the data altogether and then printing the res after reading 
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err)
    //         return console.error(err)
    //     res.end(data.toString())
    // })


    //2nd way reading the data in chunks and printing on the browser here the writing spped may differ from reading speed
    // const rstream = fs.createReadStream('inputs.txt')
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstream.on('end',()=>{
    //     res.end()
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err)
    //     res.end('file not found')
    // })

    //3rd way reading the data at the same speed and writing it
    //stream.pipe() the method used to take a readable stream and connect it to a writable stream
    const rstream = fs.createReadStream("input.txt")
    rstream.pipe(res)

})
server.listen(8000,"127.0.0.1")

/*streams are objects that let you read data from a source data to a destination in 
continuous fashion .In nodejs there are four types of streams.Streaming means listening to 
music or video in real time instead of downloading a file to your computer and watching it later

Readable - stream which is used for read operation
Writable - stream which is used for write operation
Duplex - stream which can be used for both read and write operation
Transform - A type of duplex stream where the output is computed based on input


Each type of stream is an Event Emitter instance and throws several events at diffferent 
instances of times.For Example some of the commonly used event are:-
data-This event is fired when there is data available to read
end- this event is fired when there is no more data to read
error-This event is fired when there is any error receiving or writing data
finish-This event is fired when all the data has been flushed to underlying system 
****/ 