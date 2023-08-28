const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan angka : ', (angka) => {
    angka1 = parseInt(angka);
    let angka2 = '10';
    let angka3 = '20';
    if (angka1 >angka2 && angka1<angka3){
    console.log(`angka:${angka1} = true`);}
    else {
    console.log(`angka: ${angka1} = false`);}
    rl.close();
});