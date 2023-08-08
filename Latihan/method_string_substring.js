const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// penggunaan substring

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan indeks akhir: ", (endIndex) => {
// konversi nilai indeks ke tipe number
startIndex = Number(startIndex);
endIndex = Number(endIndex);
// gunakan method substring untuk mengambil subtring dari startindex hingga endindex
const substringResult = kalimat.substring(startIndex, endIndex);
console.log (`hasil subtring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}`);
rl.close();
        });
    });
});
