const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka Pertama: ', (angka) => {
    rl.question('Masukan angka kedua: ', (angka2)=> {
    let angkaPer = parseFloat(angka);
    let angkaDua = parseFloat(angka2);
    let jumlah = (angkaPer - angkaDua);
    console.log(jumlah); 
    rl.close();
});
});