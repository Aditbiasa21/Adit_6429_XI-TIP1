const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka yang ingin disimpan: ', (angka) => {
    let total = 10;
    console.log("Nilai awal=", total);
    total /= parseInt(angka) ;
    console.log(`Hasil pembagian: ${total}`);
    rl.close();
});