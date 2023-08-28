const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka : ', (angka) => {
    let angka2 = '7';
    angkaKed = parseInt(angka2)
    console.log(angka != angkaKed);
    rl.close();
});