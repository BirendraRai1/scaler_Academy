const {spawn} = require('child_process');
const ls = spawn('ls', ['-lh', '/use']);
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});
ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
})


/*What Each Part Means:
'-lh'

A combined flag = -l + -h

-l: "Long foWhat Each Part Means:
'-lh'

A combined flag = -l + -h

-l: "Long format" (shows permissions, owner, size, etc.)

-h: "Human-readable" file sizes (e.g., 1.2K instead of 1234 bytes)

'/usr'

The directory path to inspect (Linux's /usr folder, where apps/libs live)rmat" (shows permissions, owner, size, etc.)

-h: "Human-readable" file sizes (e.g., 1.2K instead of 1234 bytes)

'/usr'

The directory path to inspect (Linux's /usr folder, where apps/libs live)



ls is the child process

When you run spawn('ls', ...), it starts a new operating system process running the ls command.

This child process is represented by the ls object in your Node.js code.

.stdout is the output pipe

Every process has 3 standard communication channels:

stdin (input - you write to the process)

stdout (output - the process writes to you)

stderr (error output)

ls.stdout is a readable stream where the ls command's normal output flows

**/ 