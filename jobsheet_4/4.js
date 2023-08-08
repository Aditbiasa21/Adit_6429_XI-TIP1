// Soal: 
// Berapa jumlah karakter dalam string "1234567890"? 
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat : ", (inputString) => {
    console.log(`Jumlah karakter : ${inputString.length} `);
rl.close();
});