const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// penggunaan touppercase

rl.question("masukan sebuah kalimat: " , (kalimat) => {
    // gunakan metode touppercase untuk mengubah kalimat menjadi huruf besar
    const kalimatUpper = kalimat.toUpperCase();
    console.log(`Kalimat dalam huruf besar: ${kalimatUpper}`);
rl.close();
});