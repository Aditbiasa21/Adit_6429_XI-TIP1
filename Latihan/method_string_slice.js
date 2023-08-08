const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// penggunaan slice

rl.question("masukan sebuah kalimat: " , (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan indeks terakhir: ", (endIndex) => {
// konversi nilai indeks ke tipe number
startIndex = Number(startIndex);
endIndex = Number(endIndex);
// gunakan method slice untuk mengambil subtsting dari startIndeks ke endIndeks
const slicedString = kalimat.slice(startIndex, endIndex);
console.log(`hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedString}`);
rl.close();
        });
    });
});
