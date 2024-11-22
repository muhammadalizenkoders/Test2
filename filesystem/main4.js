// Create a function that writes JSON data to a file. If the file already exists, append the new data without overwriting the existing content.
function writeJsonToFile(filePath, jsonData) {
    const fs = require('fs');
    const existingData = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
    const combinedData = existingData ? existingData + '\n' + JSON.stringify(jsonData) : JSON.stringify(jsonData);
    fs.writeFileSync(filePath, combinedData);
}
const filePath = 'data.json';
const jsonData = { name: 'ali', age: 19};
writeJsonToFile(filePath, jsonData);
