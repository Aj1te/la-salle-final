const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const choices = ["pierre", "feuille", "ciseaux"];
let userHistory = [];
let computerHistory = [];
let stats = { victoires: 0, defaites: 0, egalites: 0 };
let playerName = "";
function getUserChoice() {
  rl.question("Choisis (pierre, feuille, ciseaux) ou 'quitter' : ", (input) => {
    const choice = input.toLowerCase();
    if (choice === "quitter") return endGame();
    if (!choices.includes(choice)) {
      console.log(" Entrée invalide !");
      return getUserChoice();
    }
    const computerChoice = getComputerChoice();
    userHistory.push(choice);
    computerHistory.push(computerChoice);
    determineWinner(choice, computerChoice);
  });
}
function getComputerChoice() {
  if (userHistory.length === 0) {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  const lastUser = userHistory[userHistory.length - 1];
  if (lastUser === "pierre") return "feuille";
  if (lastUser === "feuille") return "ciseaux";
  if (lastUser === "ciseaux") return "pierre";
}
