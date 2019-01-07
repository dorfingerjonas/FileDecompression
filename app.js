const readline = require('readline');
const fs = require('fs');
const filename = "compressed.txt";

let compressedLines = [];
let deCompressedLines = [];

const rl = readline.createInterface({
    input: fs.createReadStream(filename),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    compressedLines.push(line);
    decompress(line);
});

rl.on('close', () => {

});

function decompress(line) {

        let letter = line.charAt(0);
        let number = parseInt(line.substring(1, line.length));

        deCompressedLines[0] = "";

        for (let j = 0; j < number; j++) {
            deCompressedLines[0] += letter;
        }
    console.log(deCompressedLines[0]);
}