/*Writable streams let you write data to a destination. Examples include:
Writing to a file
HTTP requests on the client
HTTP responses on the server
process.stdout
***/ 

// Creating a Writable Stream
// const fs = require('fs');
// const writableStream = fs.createWriteStream('output.txt', {
//     encoding: 'utf8',
//     highWaterMark: 64 * 1024 // 64KB chunks
// });
// // Writing data to the stream
// writableStream.write('Hello, World!\n', (err) => {
//     if (err) {
//         console.error('Error writing to stream:', err);
//     } else {
//         console.log('Data written successfully.');
//     }
// });

//Handling Backpressure
const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024 // 64KB chunks
}); 
function writeData() {
    let i=100
    function write(){
        let ok = true;
        do{
            i--
            if(i===0){
                //last time,close the stream
                writableStream.write('Last chunk!\n')
                writableStream.end()
            }else{
                const data = `Data chunk ${i}\n`
                ok = writableStream.write(data)
            }
        }while(i>0 && ok);
        if(i>0){
            //we need to wait for the drain event before writing more
            writableStream.once('drain', write);
        }
    }
    write()
}
writeData()
writableStream.on('finish',()=>{
    console.log("All data written successfully")
})