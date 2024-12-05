const choices = ["rock", "paper", "scissors"];
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const winnerSpan = document.getElementById("winner");
const message = document.getElementById("message");

let wins = 0;
let losses = 0;
let ties = 0;

const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");
const tiesElement = document.getElementById("ties");

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        userChoiceSpan.textContent = userChoice;
        computerChoiceSpan.textContent = computerChoice;

        const result = determineWinner(userChoice, computerChoice);
        winnerSpan.textContent = result;

        if (result === "You win!") {
            wins++;
        } else if (result === "Website wins!") {
            losses++;
        } else {
            ties++;
        }

        updateScore();
    });
});

function determineWinner(user, computer) {
    if (user === computer) return "It's a tie!";
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    }
    return "Website wins!";
}

function updateScore() {
    winsElement.textContent = wins;
    lossesElement.textContent = losses;
    tiesElement.textContent = ties;
}

document.getElementById("reset").addEventListener("click", () => {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScore();
    message.textContent = "Game reset! Make your choice!";
    winnerSpan.textContent = "-";
    userChoiceSpan.textContent = "-";
    computerChoiceSpan.textContent = "-";
});
