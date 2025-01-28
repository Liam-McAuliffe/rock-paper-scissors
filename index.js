/* Define Varriables */

let rock = "rock";

let paper = "paper";

let scissors = "scissors";

let options = [rock, paper, scissors];

let userScore = 0;
let computerScore = 0;

/* Computer Chooses an Option */
function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3);
    return options[randNum];
}

function playRound(userChoice, computerChoice) {
    console.log(`user chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    updateAction(userChoice, computerChoice);
    switch (userChoice) {
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
                    console.log("user Wins!");
                    userScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("user Wins!");
                    userScore++;
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
                    console.log("user Wins!");
                    userScore++;
                    break;
                case "scissors":
                    console.log("Its a Tie!");
                    break;
            }
            break;
    }
    console.log(`user Score: ${userScore}`);
    console.log(`Computer Score: ${computerScore}`);
    updateScore();
}

function updateScore() {
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("user-score").textContent = userScore;
}

function updateAction(userChoice, computerChoice) {
    document.getElementById(
        "computer-action"
    ).textContent = `${computerChoice.toUpperCase()}!`;
    document.getElementById(
        "user-action"
    ).textContent = `${userChoice.toUpperCase()}!`;
}

let rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

let paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

let scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
