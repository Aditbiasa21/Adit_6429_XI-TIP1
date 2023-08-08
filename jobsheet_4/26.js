// Soal: 
// Dapatkan slice dari kalimat "Welcome to the world of programming" mulai dari indeks 11  dengan panjang 5 karakter. 



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: " , (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan indeks terakhir: ", (endIndex) => {

startIndex = Number(startIndex);
endIndex = Number(endIndex);

const slicedString = kalimat.slice(startIndex, endIndex);
console.log(`hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedString}`);
rl.close();
        });
    });
});
