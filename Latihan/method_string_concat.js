
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// penggunaan concat

rl.question("masukan kalimat ke 1: ", (kalimat) => {
    rl.question("Masukan kalimat ke 2: " , (kalimat2) => {
        // menggabungkan kalimat dan kalimat2 menggunakan method concat
        const kalimatGabungan = kalimat.concat(kalimat2);
        console.log(`hasil digabung: ${kalimatGabungan} `);
        rl.close();
    });
});