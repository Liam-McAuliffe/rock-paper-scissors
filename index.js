/* Define Varriables */

let rock = "rock";

let paper = "paper";

let scissors = "scissors";

let options = [rock, paper, scissors];

let humanScore = 0;
let computerScore = 0;

/* Computer Chooses an Option */
function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3);
  return options[randNum];
}

/* Human Chooses an Option */
function getHumanChoice() {
  userChoice = window.prompt("rock, paper, or scissors");
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  humanChoice = humanChoice.toLowerCase();
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("Its a Tie!");
          break;
        case "paper":
          console.log("Computer Wins!");
          computerScore++;
          break;
        case "scissors":
          console.log("Human Wins!");
          humanScore++;
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("Human Wins!");
          humanScore++;
          break;
        case "paper":
          console.log("Its a Tie!");
          break;
        case "scissors":
          console.log("Computer Wins!");
          computerScore++;
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("Computer Wins!");
          computerScore++;
          break;
        case "paper":
          console.log("Human Wins!");
          humanScore++;
          break;
        case "scissors":
          console.log("Its a Tie!");
          break;
      }
      break;
  }
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

getHumanChoice();
playRound(userChoice, getComputerChoice());

let button = document.getElementById("play-again");
button.addEventListener("click", () => {
  playRound(getHumanChoice(), getComputerChoice());
});
