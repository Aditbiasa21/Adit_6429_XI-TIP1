const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// penggunaan lenght

rl.question("masukan kalimat : ", (inputString) => {
    // contoh properti lenght
    console.log(`panjang kalimat : ${inputString.length} `);
rl.close();
});




















