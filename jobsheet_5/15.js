const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka Pertama: ', (angka) => {
    rl.question('Masukan angka kedua: ', (angka2)=> {
    console.log(angka > angka2);
    rl.close();
});
});