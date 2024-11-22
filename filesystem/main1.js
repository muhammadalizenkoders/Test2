// Write a function to read all files in a directory recursively and return their paths as an array.(For example, given a directory structure, return ['dir/file1.txt', 'dir/subdir/file2.txt'].)
const fs = require('fs');
const path = require('path');

function getAllFilePaths(directory) {
    let filePaths = [];

    function readDirectory(dir) {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                readDirectory(filePath);
            } else {
                filePaths.push(filePath);
            }
        });
    }

    readDirectory(directory);
    return filePaths;
}

const filePath = '.';
console.log(getAllFilePaths(filePath));
