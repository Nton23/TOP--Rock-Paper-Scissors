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

//create button for rock, scissors, and paper
const rockButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const paperButton = document.createElement('button');

//set the text content of the button
rockButton.textContent = "Rock";
scissorsButton.textContent = "Scissors";
paperButton.textContent = "Paper";

//add the button to the html document
document.body.appendChild(rockButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(paperButton);

//set class attribute to each button
rockButton.setAttribute("class", "users-bttn");
scissorsButton.setAttribute("class", "users-bttn");
paperButton.setAttribute("class", "users-bttn");

//set id attribute to each button
rockButton.setAttribute("id", "rockBttn");
scissorsButton.setAttribute("id", "scissorsBttn");
paperButton.setAttribute("id", "paperBttn");

//add event listener to button
rockButton.addEventListener("click", () => {
    console.log(playRound("Rock", getComputerChoice()));
})
scissorsButton.addEventListener("click", () => {
    console.log(playRound("Scissors", getComputerChoice()));
})
paperButton.addEventListener("click", () => {
    console.log(playRound("Paper", getComputerChoice()));
})

//set user button to id user-button-container div
const div-user-buttons-container = document.getElementById("user-buttons-container");
const div-text-result-container = document.getElementById("text-result-container");
const div-record-tracking-container = document.getElementById("record-tracking-container");
const div-user-record-container = document.getElementById("user-record-container");
const div-computer-record-container = document.getElementById("computer-record-container");
const div-user-computer-value-container = document.getElementById("user-computer-value-container");