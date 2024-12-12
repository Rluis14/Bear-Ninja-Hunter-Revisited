// Define choices
const choicesArray = ["Bear", "Ninja", "Hunter"];

// Track wins and losses
let playerWins = 0;
let computerWins = 0;

// Play a game round
function playGame(playerChoice) {
    // Randomly select a choice for the computer
    const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];

    // Determine the result
    let resultMessage;
    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === "Bear" && computerChoice === "Ninja") ||
        (playerChoice === "Ninja" && computerChoice === "Hunter") ||
        (playerChoice === "Hunter" && computerChoice === "Bear")
    ) {
        resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerWins++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerWins++;
    }

    // Display the result
    document.getElementById("result").innerHTML = `
        <p>${resultMessage}</p>
        <p>Your Wins: ${playerWins}</p>
        <p>Computer Wins: ${computerWins}</p>
    `;

    // Show the "Play Again" button
    document.getElementById("play-again").style.display = "block";

    // Disable the choice buttons
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => button.disabled = true);
}

// Reset the game
function resetGame() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("play-again").style.display = "none";

    // Re-enable the choice buttons
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => button.disabled = false);
}
