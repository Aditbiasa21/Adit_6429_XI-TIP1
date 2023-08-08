const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// penggunaan LastIndexOf

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan kata yang ingin dicari: ", (kataCari) => {
        // gunakan method LastIndexOf untuk mencari kataCari dalam kalimat
        const IndeksKataTerakhir = kalimat.lastIndexOf(kataCari);
        if (IndeksKataTerakhir !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada indeks terakhir: '${IndeksKataTerakhir}'`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan.`);
        }
        rl.close();
    });
});