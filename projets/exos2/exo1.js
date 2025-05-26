const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let scores = [];
let maxAttempts = 5;
let targetNumber = 0;
let attempts = 0;
let rangeMax = 100;
let playerName = "";
function askDifficulty() {
  rl.question("Choisis une difficulté : facile (1), normal (2), difficile (3) : ", (diff) => {
    if (diff === "1") rangeMax = 50;
    else if (diff === "3") rangeMax = 200;
    else rangeMax = 100;
    targetNumber = Math.floor(Math.random() * rangeMax) + 1;
    askName();
  });
}
function askName() {
  rl.question("Entre ton prénom : ", (name) => {
    playerName = name;
    console.log(`Bonne chance ${playerName} ! Trouve le nombre entre 1 et ${rangeMax}`);
    askGuess();
  });
}
function askGuess() {
  rl.question(`Essai ${attempts + 1}/${maxAttempts} - Ton chiffre ? `, (input) => {
    let guess = parseInt(input);
    if (isNaN(guess) || guess < 1 || guess > rangeMax) {
      console.log(" Entrée invalide. Réessaie avec un chiffre.");
      return askGuess();
    }
    attempts++;
    checkGuess(guess);
  });
}
function checkGuess(guess) {
  if (guess === targetNumber) {
    console.log(` Bravo ${playerName}, tu as trouvé en ${attempts} essais !`);
    saveScore();
  } else if (guess < targetNumber) {
    console.log("Trop petit !");
  } else {
    console.log("Trop grand !");
  }
  if (guess !== targetNumber) {
    if (attempts < maxAttempts) {
      askGuess();
    } else {
      console.log(` Dommage ! Le bon chiffre était ${targetNumber}`);
      saveScore();
    }
  }
}
function saveScore() {
  const date = new Date().toLocaleString();
  const result = `${playerName} | Tentatives: ${attempts} | ${date}\n`;
  fs.appendFileSync("scores.txt", result);
  menu();
}
function showScores() {
  if (fs.existsSync("scores.txt")) {
    const data = fs.readFileSync("scores.txt", "utf8");
    console.log("\n Scores :\n" + data);
  } else {
    console.log("Aucun score enregistré.");
  }
  menu();
}
function menu() {
  attempts = 0;
  console.log("\nMenu :\n1. Jouer\n2. Voir scores\n3. Quitter");
  rl.question("Choix : ", (choice) => {
    if (choice === "1") {
      askDifficulty();
    } else if (choice === "2") {
      showScores();
    } else {
      console.log("À bientôt !");
      rl.close();
    }
  });
}
menu();
