const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// penggunaan trim
rl.question("masukan sebuah kalimat: " , (kalimat) => {
    // gunakan metode trim untuk menghapus spasi di awal dan akhir kalimat
    const kalimatTrim = kalimat.trim();
    console.log(`Kalimat setelah di trim: ${kalimatTrim}`);
rl.close();
});