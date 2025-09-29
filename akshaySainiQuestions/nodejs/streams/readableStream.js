//Readable stream operates in two modes: flowing and paused.
// In flowing mode, data is read automatically and emitted as 'data' events.
// In paused mode, you need to explicitly call read() to get data.      
//Readable streams
/*Readable streams let you read data from a source. Examples include:

Reading from a file
HTTP responses on the client
HTTP requests on the server
process.stdin
*
*
*****/ 

//Creating a Readable Stream
// const fs = require('fs');
// const readableStream = fs.createReadStream('input.txt', { 
//     encoding: 'utf8' ,
//     highWaterMark:64 * 1024 // 64KB chunks
// });
// readableStream.on('data', (chunk) => {
//     console.log(`Received ${chunk.length} bytes of data.`);
//     // Process the chunk here
// });
// readableStream.on('end', () => {       
//     console.log('No more data to read.');
// });
// readableStream.on('error', (err) => {
//     console.error('Error reading from stream:', err);
// });

//Reading Modes
//Readable streams can operate in two modes: flowing and paused.
// In flowing mode, data is read from the source and provided to your application as quickly as possible using events
// In paused mode, you need to explicitly call read() to get chunks of data from the stream

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt', { 
    encoding: 'utf8' ,
    highWaterMark: 64 * 1024 // 64KB chunks
    });
//Manually consume the stream using read()
readableStream.on('readable', () => {
    let chunk;
    while (null !== (chunk = readableStream.read())) {
        console.log(`Received ${chunk.length} bytes of data.`);
        // Process the chunk here
        console.log(chunk);
    }
});

readableStream.on('end', () => {
    console.log('No more data to read.');
});
