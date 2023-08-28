const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka yang ingin disimpan: ', (angka) => {
    let nilai = Number(angka);
    console.log(`Angka yang disimpan: ${nilai}`);
    rl.close();
});