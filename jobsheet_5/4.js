const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka: ', (angka) => {
    let strAngka = parseFloat(angka)
    console.log(`Hasil input nya:${strAngka}`);
    console.log(typeof angka);
    console.log(typeof strAngka);
    rl.close();
});