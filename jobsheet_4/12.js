// Soal: 
// Gabungkan kata "Welcome" dengan nama pengguna (input dari pengguna) untuk menyapa  pengguna. 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Halo! nama anda siapa?  ", (nama) => {
   const sapaan = ("Welcome! ")
        const kalimatGabungan = sapaan.concat(nama);
        console.log(` ${kalimatGabungan} `);
        rl.close();
    });

