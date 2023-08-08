// Soal: 
// Dapatkan slice dari string "1234567890" mulai dari indeks 4 dengan panjang 4 karakter.



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah string: " , (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan total ideks akhir: ", (endIndex) => {

startIndex = Number(startIndex);
endIndex = Number(endIndex);

const slicedString = kalimat.slice(startIndex, endIndex);
console.log(`hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedString}`);
rl.close();
        });
    });
});
