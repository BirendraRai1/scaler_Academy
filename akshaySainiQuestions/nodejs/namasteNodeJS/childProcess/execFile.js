const {execFile} = require('child_process');
execFile('python3',['/home/computer/biruPython/01_basics/chai.py'], (error, stdout, stderr) => {
    if (error) {
        console.error(`execFile error: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})