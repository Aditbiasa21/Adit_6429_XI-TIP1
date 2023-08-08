// Soal: 
// Pada indeks berapa kata "apel" pertama kali muncul dalam kalimat "Ibu ani pergi ke sebuah  pasar untuk membeli buah apel dan buah melon"?

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("kalimat: ", (kalimat) => {
    rl.question("masukan kata yang ingin dicari: ", (kataCari) => {
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`kata '${kataCari}' ditemukan pertama kali pada indeks: ${indeksKata}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});
