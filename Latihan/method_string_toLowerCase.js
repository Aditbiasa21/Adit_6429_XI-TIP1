const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// penggunaan tolowercase\
rl.question("masukan sebuah kalimat: " , (kalimat) => {
    // gunakan metode ToLowerCase untuk mengubah kalimat menjadi huruf kecil
    const kalimatLower = kalimat.toLowerCase();
    console.log(`Kalimat dalam huruf kecil: ${kalimatLower}`);
rl.close();
});