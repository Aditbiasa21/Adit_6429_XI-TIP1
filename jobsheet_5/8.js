const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka Pertama: ', (angka) => {
    rl.question('Masukan angka kedua: ', (angka2)=> {
    let angkaPer = parseInt(angka);
    let angkaDua = parseInt(angka2);
    let hasil = (angkaPer %= angkaDua);
    console.log(hasil); 
    rl.close();
});
});