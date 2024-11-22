// Implement a function to monitor changes in a file and log any modifications to the console in real time.
const fs = require('fs');

function monitorFile(filePath) {
    fs.watch(filePath, (eventType, filename) => {
        if (eventType === 'change') {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading file: ${err}`);
                } else {
                    console.log(`File ${filename} modified: ${data}`);
                }
            });
        }
    });
}

const filePath = 'abc.txt';
monitorFile(filePath);