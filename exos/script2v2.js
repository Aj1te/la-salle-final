const prompt = require('prompt-sync')();
// Variables
let chiffre_un = prompt("Donne moi un chiffre : ");
console.log(chiffre_un);
let chiffre_deux = prompt("Donne moi un deuxieme chiffre : ");
console.log(chiffre_deux);
let calcul = chiffre_un + chiffre_deux

console.log("La somme des deux chiffre est : " + chiffre_un + chiffre_deux);