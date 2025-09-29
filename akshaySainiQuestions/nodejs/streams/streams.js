/*Streams are one of the fundamental concepts in Node.js for handling data efficiently.

They allow you to process data in chunks as it becomes available, rather than loading everything 
into memory at once.

streams are extensively used in
File system operations (reading/writing files)
HTTP requests and responses
Data compression and decompression
Database operations
Real-time data processing
*
****/ 

/*Basic Stream Example
*
**/ 
const fs = require('fs');
const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);
// Handle events
readableStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});
readableStream.on('end', () => {
    console.log('No more data to read.');
});
readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
}); 
writableStream.on('finish', () => {
    console.log('Write completed.');
});
writableStream.on('error', (err) => {
    console.error('Error writing file:', err);
}); 

/*There are several advantages of using streams
Memory Efficiency: Process large files without loading them entirely into memory
Time Efficiency: Start processing data as soon as you have it, instead of waiting for all the data
Composability: Build powerful data pipelines by connecting streams
Better User Experience: Deliver data to users as it becomes available (e.g., video streaming)
*
******/ 


/*Core Stream Types

Stream Type	       Description	                                     Common Examples
Readable	Streams from which data can be read (data source)	     fs.createReadStream(), HTTP responses, process.stdin
Writable	Streams to which data can be written (data destination)	   fs.createWriteStream(), HTTP requests, process.stdout
Duplex	    Streams that are both Readable and Writable	TCP sockets,         Zlib streams
Transform	Duplex streams that can modify or transform 
             data as it's written and read	                            Zlib streams, crypto streams
*

******/ 