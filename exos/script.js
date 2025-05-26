const prompt = require('prompt-sync')();


//age EST_DU_TYPE NOMBRE

//AFFICHER "Quel est votre âge ?"
//LIRE age
let age = prompt("Quel est votre age ? "); 
console.log(age);

// SI (age<18) ALORS

if (age<18) {
    //   AFFICHER* "Vous êtes mineur"
    console.log("Vous êtes mineur" )   

}
//SINON
else {
    console.log("Vous êtes majeur")
}

 // AFFICHER* "Vous êtes majeur"


 // FIN_SINON


