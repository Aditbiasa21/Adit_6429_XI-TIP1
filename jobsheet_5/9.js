const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka Pertama: ', (angka) => {
    rl.question('Masukan angka kedua: ', (angka2)=> {
        rl.question('Masukan angka Ketiga: ', (angka3)=> {
    let angkaPer = parseInt(angka);
    let angkaDua = parseInt(angka2);
    let angkaTig = parseInt(angka3);
    let jumlah1 = (angkaPer + angkaDua);
    let jumlah = (jumlah1 * angkaTig);
    console.log(jumlah); 
    rl.close();
});
});
});