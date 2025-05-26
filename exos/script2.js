const prompt = require('prompt-sync')();
// Variables
let chiffre_un = prompt("Donne moi un chiffre : ");
console.log(typeof chiffre_un);
let chiffre_deux = prompt("Donne moi un deuxieme chiffre : ");
console.log(typeof chiffre_deux);
parseInt(chiffre_un)

console.log("La somme des deux chiffre est : " + chiffre_un + chiffre_deux);