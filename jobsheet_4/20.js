// Soal: 
// Dapatkan substring dari string "Universitas Sudirman merupakan universitas yang terletak di  kota Purwokerto" mulai dari indeks 3 hingga indeks 10. 


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan indeks akhir: ", (endIndex) => {

startIndex = Number(startIndex);
endIndex = Number(endIndex);

const substringResult = kalimat.substring(startIndex, endIndex);
console.log (`hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}`);
rl.close();
        });
    });
});
