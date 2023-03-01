// initialzing our game with the user's and computer's choice
let choice = ["Rock", "Paper", "Scissors"];
let computerSelection = computerPlay();
let playerSelection = '';
// let gameMsg = []

let playerScore = 0;
let computerScore = 0;

function playerPlay() {
    return playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");

}

function computerPlay() {
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

// Function for a Single round game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Both player chooses ${playerSelection}. OOPS! It's a tie.`);
    } else if (playerSelection === "Rock") {
            if (computerSelection === 'Paper') {
                computerScore+= 1;
                console.log("Paper covers Rock. You lose! Computer Won.");
            } else {
                playerScore+= 1;
                console.log("Rock smashes Scissors. Hurray! You won.");
            }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                playerScore+= 1;
                console.log("Paper covers Rock. You won!");
            } else {
                computerScore+= 1;
                console.log("Scissors cut Paper. You lose! Computer Won.");
            }
        } else if (playerSelection === "Scissors") {
            if (computerSelection === "Paper") {
                playerScore+= 1;
                console.log("Scissors cut paper. You won!");
            } else {
                computerScore+= 1;
                console.log("Rock smashes Scissors. You lose! Computer Won.");
            }
        } else {
            console.log("Wrong Input!");
        }

}

// Looping through the game five times
function game() {
    for (let i = 1; i <= 5; i++) {
        playerPlay();
        computerPlay();
        if (i == 5) {
            if (playerScore > computerScore) {
                console.log("Congrats! You beat the Computer!!!");
            } else if (playerScore == computerScore) {
                console.log("Nobody wins. It's a tie!");
            } else {
                console.log("Hahahha. The Computer have beaten you. You lose the game!!");
            }
            console.log(playerScore);
            console.log(computerScore);
        } else {
              playRound(playerSelection, computerSelection);
        }
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
}

game();