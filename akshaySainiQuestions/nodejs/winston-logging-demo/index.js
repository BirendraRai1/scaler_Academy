const logger = require("./config/logger");
function simulateTask(shouldFail = false) {
  logger.info("Starting simulateTask...");
  if (shouldFail) {
    logger.warn("A warning occurred during simulateTask.");
    try {
      // Simulate some work
    throw new Error("This is a simulated error within simulateTask!");
    } catch (error) {
      logger.error("Failed to complete simulateTask:",error);
    }
  }
  else{
    logger.debug('This is a debug message (only visible in dev mode)');
    logger.info('simulateTask completed successfully.', { taskId: 'abc-123', durationMs: 150 })
  }
  logger.info('simulateTask finished.');
}

async function simulateAsyncOperation(shouldReject=false){
    logger.info('Starting simulateAsyncOperation...');
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(shouldReject){
                logger.error('simulateAsyncOperation failed with an error.');
                reject(new Error('This is a unhandled Promise rejection'));
            } else {
                logger.info('Async operation completed.');
                resolve('Data fetched');
            }
        }, 1000);
    })
}


//Main execution
logger.info('Application started.');
logger.http('Incoming HTTP request simulated for /api/data')
simulateTask(false);
simulateTask(true);
simulateAsyncOperation(false)
    .then(data => logger.info('Async operation result:', data))
    .catch(err => logger.error('Async operation error:', err));
simulateAsyncOperation(true)
    .then(data => logger.info('Async operation result:', data))
    // We catch it here just to prevent the process from exiting immediately
    // but the rejectionHandler in Winston will still log it if not caught earlier
    .catch(err => logger.error('Caught promise rejection in main app .This demonstrates it was logged by Winston too:', err.message));


// Simulate an uncaught exception (THIS WILL CRASH YOUR APP NORMALLY, but Winston will log it first)
// Uncomment the line below to test exceptionHandlers. The app will exit after logging.
// setTimeout(() => {
//     throw new Error('This is an uncaught application exception!');
// }, 500);



logger.info('Application finished main execution flow');

// Note: The above code is a simple demonstration of how to use Winston for logging in a Node.js application.
// It includes synchronous and asynchronous logging, error handling, and demonstrates how Winston can be configured to
// log to both the console and files, as well as handle exceptions and rejections.
// Make sure to have the 'winston' package installed in your project to run this code



//explanation of index.js

/*const logger = require('./logger');: Imports the logger instance we configured.

logger.info(), logger.warn(), logger.error(), logger.debug(), logger.http(): These are the core methods to log messages at different levels.

Metadata: Notice logger.info('simulateTask completed successfully.', { taskId: 'abc-123', durationMs: 150 });. The second argument can be an object containing arbitrary metadata, which Winston will include in the log output (especially useful for JSON logs).

Error Objects: When logging errors, it's best practice to pass the Error object directly (e.g., logger.error('Failed to complete simulateTask:', error);). Winston is smart enough to extract the message and stack trace from it.

exceptionHandlers and rejectionHandlers Demo:

simulateAsyncOperation(true) demonstrates an unhandled promise rejection. Winston's rejectionHandlers will catch and log this.

The commented-out throw new Error(...) demonstrates an uncaught synchronous exception. If uncommented, Winston's exceptionHandlers will log it before the Node.js process exits.
*************/ 