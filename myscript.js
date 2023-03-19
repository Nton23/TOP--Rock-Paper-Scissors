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

//set class attribute to each button
rockButton.setAttribute("class", "users-bttn");
scissorsButton.setAttribute("class", "users-bttn");
paperButton.setAttribute("class", "users-bttn");

//set id attribute to each button
rockButton.setAttribute("id", "rockBttn");
scissorsButton.setAttribute("id", "scissorsBttn");
paperButton.setAttribute("id", "paperBttn");

//add text-result-container and text-result


//add event listener to button
rockButton.addEventListener("click", () => {
    const result = playRound("Rock", getComputerChoice());
    textResult.textContent = result;
})
scissorsButton.addEventListener("click", () => {
    const result = playRound("Scissors", getComputerChoice());
    textResult.textContent = result;
})
paperButton.addEventListener("click", () => {
    const result = playRound("Paper", getComputerChoice());
    textResult.textContent = result;
})

//set div from html to var in js
//const userButtonsContainer = document.getElementById("user-buttons-container");
const textResultContainer= document.getElementById("text-result-container");
const recordTrackingContainer = document.getElementById("record-tracking-container");
const userRecordContainer = document.getElementById("user-record-container");
const computerRecordContainer = document.getElementById("computer-record-container");
//const userComputerValueContainer = document.getElementById("user-computer-value-container");
const rockContainer = document.getElementById("rock-container");
const scissorsContainer = document.getElementById("scissors-container");
const paperContainer = document.getElementById("paper-container");
const textResult = document.getElementById("text-result");
const userValue = document.getElementById("user-value");
const userVsComputer = document.getElementById("user-vs-computer");
const computerValue = document.getElementById("computer-value");

//set div class from html to var in js
const userContainer = document.getElementsByClassName("user-container");

//add buttons to div container
rockContainer.appendChild(rockButton);
scissorsContainer.appendChild(scissorsButton);
paperContainer.appendChild(paperButton);

