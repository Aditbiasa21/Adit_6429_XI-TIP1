const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka : ', (angka) => {
    let angka2 = '5';
    console.log(angka == angka2);
    console.log(typeof angka);
    console.log(typeof angka2);
    console.log(angka === angka2);
    rl.close();
});
