const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// penggunaan indexOf

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan kata yang ingin dicari: ", (kataCari) => {
        // gunakan method indexOf untuk mencari kataCari dalam kalimat
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada indeks: ${indeksKata}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});