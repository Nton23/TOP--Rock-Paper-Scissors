function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "Rock";
    } else if (result === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    let uncapitalPlayerSelection = playerSelection.toLowerCase();
    let uncapitalComputerSelection = computerSelection.toLowerCase();
    if (uncapitalComputerSelection === uncapitalPlayerSelection) {
        return `It is a tie, you put ${uncapitalPlayerSelection} and computer puts ${uncapitalComputerSelection}`;
    } else if (uncapitalComputerSelection === "rock" && uncapitalPlayerSelection === "scissors") {
        return `You lose! ${uncapitalComputerSelection} beats ${uncapitalPlayerSelection}`;
    } else if (uncapitalComputerSelection === "paper" && uncapitalPlayerSelection === "rock") {
        return `You lose! ${uncapitalComputerSelection} beats ${uncapitalPlayerSelection}`;
    } else if (uncapitalComputerSelection === "scissors" && uncapitalPlayerSelection === "paper") {
        return `You lose! ${uncapitalComputerSelection} beats ${uncapitalPlayerSelection}`;
    } else if (uncapitalComputerSelection === "rock" && uncapitalPlayerSelection === "paper") {
        return `You win! ${uncapitalPlayerSelection} beats ${uncapitalComputerSelection}`;
    } else if (uncapitalComputerSelection === "scissors" && uncapitalPlayerSelection === "rock") {
        return `You win! ${uncapitalPlayerSelection} beats ${uncapitalComputerSelection}`;
    } else if (uncapitalComputerSelection === "paper" && uncapitalPlayerSelection === "scissors") {
        return `You win! ${uncapitalPlayerSelection} beats ${uncapitalComputerSelection}`;
    }
}
function game() {
    let result = '';
    const playerSelection = prompt("Rock/Paper/Scissors? :");
    const computerSelection = getComputerChoice();
    result += `${playRound(playerSelection, computerSelection)}\n`;
}

const rockButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const paperButton = document.createElement('button');

rockButton.innerText = "Rock";
scissorsButton.innerText = "Scissors";
paperButton.innerText = "Paper";