// Soal: 
//  Ubah kalimat "Data Analyst merupakan pekerjaan yang dibutuhkan beberapa perusahaan"  menjadi huruf besar (uppercase). 



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: " , (kalimat) => {
    const kalimatUpper = kalimat.toUpperCase();
    console.log(`Kalimat dalam huruf besar: ${kalimatUpper}`);
rl.close();
});
