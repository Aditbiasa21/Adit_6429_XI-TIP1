// Soal: 
// Dapatkan substr 7 karakter terakhir dari string "Universitas Gajah Mada adalah salah satu  universitas favorite di Indonesia".



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat: ", (kalimat) => {

    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan panjang karakter: ", (length) => {

startIndex = Number(startIndex);
length = Number(length);

const substringResult= kalimat.substr(startIndex, length);
console.log(`hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
rl.close();
        });
    });
});
