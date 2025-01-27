/* Define Varriables */

let rock = "rock";

let paper = "paper";

let scissors = "scissors";

let options = [rock, paper, scissors];

let humanScore = 0;
let computerScore = 0;

/* Computer Chooses an Option */
function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3) + 1;
  return options[randNum];
}

console.log(getComputerChoice());

/* Human Chooses an Option */
function getHumanChoice() {
  userChoice = window.prompt("rock, paper, or scissors");
}

getHumanChoice();
console.log(userChoice);