const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka yang ingin dimasukan ke variabel total: ', (angka) => {
    let total = 5;
    console.log("Nilai awal=", total);
    total += parseInt(angka) ;
    console.log(`Hasil penambahan: ${total}`);
    rl.close();
});