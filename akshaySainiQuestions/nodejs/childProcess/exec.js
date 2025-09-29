const {exec} = require('child_process');
exec('date', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})

//Description :Spawns a shell and executes a command, buffering the output
//use Case :When you need to run a shell command and get the entire output at once