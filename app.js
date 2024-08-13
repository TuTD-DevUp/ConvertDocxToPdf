const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

app.get('/run-bat', (req, res) => {
    const batFilePath = path.join(__dirname, 'bulk-convert-Word2PDF.bat');

    exec(`cmd.exe /c ${batFilePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing batch file: ${error.message}`);
            return res.status(500).send('Error running batch file');
        }

        if (stderr) {
            console.error(`Batch file error: ${stderr}`);
            return res.status(500).send('Batch file error');
        }

        console.log(`Batch file output: ${stdout}`);
        res.send('Batch file executed successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
