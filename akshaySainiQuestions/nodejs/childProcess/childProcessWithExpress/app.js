import express from 'express';
import { fork} from 'child_process';
import path from 'path';
import { fileURLToPath } from "url"; // Import fileURLToPath from the 'url' module

// Recreate __filename and __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    const childProcessPath = path.resolve(__dirname, 'child.js');
    //const childProcessPath = path.resolve(__dirname, 'nonExistentChild.js');//use this code for printing the error message
    const child = fork(childProcessPath);
    let childResponse = '';
    child.on('message', (message) => {
        console.log('message from child (in parent process)',message)
        childResponse = message;
        res.send(`Response from child process: ${childResponse}`);
    })
    child.on('error',(err)=>{
        console.error('child process error:',err)
        if(!res.headersSent) {
            res.status(500).send('error communicating child Process');
        }
    })
    child.on('close',(code)=>{
        console.log(`Child process exited with code ${code}`);
        if(!res.headersSent && !childResponse) {
            res.status(500).send('Child process closed without sending a valid response');
        }
    })
    child.send('Hello from parent process');
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
