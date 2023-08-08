const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// penggunaan substr

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan panjang substring: ", (length) => {
// konversi nilai indeks dan panjang ke tipe number
startIndex = Number(startIndex);
length = Number(length);
// gunakan methode substr untuk mengambil substring dari startINdeks dengan panjang length
const substringResult= kalimat.substr(startIndex, length);
console.log(`hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
rl.close();
        });
    });
});