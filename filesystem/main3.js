// Write a program that reads a large file line by line without loading the entire file into memory. Explain why this approach is efficient.
const fs = require('fs');
const readline = require('readline');

function readLargeFile(filePath) {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        console.log(line);
    });

    rl.on('close', () => {
        console.log('File reading completed.');
    });
}

const filePath = 'largefile.txt';
readLargeFile(filePath);
