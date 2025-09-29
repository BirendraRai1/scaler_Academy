const {createLogger, format, transports} = require('winston');
const {combine, timestamp, printf,colorize,simple} = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp ,stack}) => {
    return `${timestamp} ${level}: ${message}${stack ? `\n${stack}` : ''}`;
})

//A transport's level option means: log messages with this level OR any level numerically lower (more severe) than this."
const logger = createLogger({
    level: 'info', // Default log level
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        colorize(),
        simple()
    ),
    transports: [
        new transports.Console({
            level:'info',
            format:combine(
                colorize(),
                simple()
            )
        }),
        new transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                logFormat
            )
        }),
        new transports.File({
            filename: 'logs/combined.log',
            level: 'info',
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                logFormat
            )
        })
    ],
    exceptionHandlers:[
        new transports.File({filename:'logs/exceptions.log'}),
    ],
    rejectionHandlers:[
        new transports.File({filename:'logs/rejections.log'}),
    ]
});

if(process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: combine(
            colorize(),
            simple()
        ),
        level: 'debug' // Show debug logs in development
    }));
}

module.exports = logger;


/*What is Winston?
Winston is a versatile and highly popular logging library for Node.js. 
It's designed to be simple and universal, providing robust and flexible logging capabilities.
 Here's why it's a go-to choice for many developers:

Multiple Transports: Winston doesn't just log to the console. It can send your logs to
 various "transports," such as:

Console: The default.

File: Logs to a file (or multiple files).

HTTP: Sends logs to a remote HTTP endpoint.

Stream: Writes to any Node.js WritableStream.

DailyRotateFile: A very popular plugin for rotating log files daily or by size.

And many more community-contributed transports (e.g., for databases, cloud services, etc.).

Levels: It supports standard logging levels (RFC5424 and NPM levels).

error: Critical errors.

warn: Warnings that don't stop execution.

info: General informational messages.

http: HTTP requests.

verbose: More detailed information.

debug: Debugging information.

silly: Extremely verbose debugging.

You can define custom levels as well.

Formatting: Winston allows you to format your log messages in various ways. You can include timestamps, log levels, custom metadata, and output logs in plain text, JSON, or other custom formats.

combine: Combine multiple formats.

timestamp: Add a timestamp.

json: Output logs as JSON.

simple: A simple text format.

colorize: Add colors to console output.

printf: Custom printf-style formatting.

Metadata: You can attach arbitrary metadata (objects, strings, numbers) to your log messages, which is incredibly useful for debugging and tracing.

Child Loggers: You can create child loggers that inherit settings from a parent logger but can also override or add specific configurations. This is great for logging different parts of your application with different settings.

*******/ 

/*createLogger: The core function from Winston to create a logger instance.

level: 'info': This sets the default minimum logging level for all transports. Any log message with a level lower than info will be ignored unless a specific transport overrides this.

format: Defines the default format for logs.

combine: Allows you to chain multiple formatters.

timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }): Adds a timestamp to each log.

printf: A powerful formatter for custom string interpolation. We use it to create a string like "YYYY-MM-DD HH:mm:ss level: message". It also checks for stack (for errors).

transports: An array where you define where your logs should go.

Console transport:

level: 'info' (or 'debug' in dev): Specifies that only messages with info level or higher (warn, error) should be displayed in the console.

colorize(): Makes the log level text colored in the console.

simple(): A simple, pre-defined text format often good for console output.

File transports:

filename: The path to the log file. logs/error.log and logs/combined.log will be created in a logs directory.

level: Crucially, the error.log file only captures error messages and above, while combined.log captures info and above.

format: The file transports also use the timestamp and custom logFormat.

exceptionHandlers: A special array of transports that will catch and log any uncaught exceptions in your application. This is vital for production applications.

rejectionHandlers: Catches and logs unhandled promise rejections. Also very important.

if (process.env.NODE_ENV !== 'production'): This is a common pattern. In development, you often want more verbose logging (e.g., debug level) to the console. In production, you typically stick to info or warn for console, and perhaps higher levels for files.
************/ 