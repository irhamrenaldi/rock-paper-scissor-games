//generate options
const choice = ["rock", "paper", "scissor"];

//randomize computer selection
let computerPlay = choice[Math.floor(Math.random() * 3)];

// game rules
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "You win, Rock beats Scissor!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "You lose, Scissor beats Paper!";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "You lose, Rock beats Scissor!";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "You win, Scissor beats Paper!";
    } else {
        return "It's a draw!";
    }
}
// play games in 5 round
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Type 'rock,' 'paper', or 'scissor' to play!").toLowerCase();
        computerSelection = computerPlay;
        console.log("Round " + (i + 1))
        console.log("Player select " + playerSelection);
        console.log("Computer select " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));     
    }
}

console.log(game());