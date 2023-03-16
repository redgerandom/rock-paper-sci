let score = 0;
let cpuScore = 0;
let lossMessage = "Cpu won the tourney!";
let winMessage = "You won the tourney! ";
let display = "5 points wins the tourney! May the gods be in your favor!";
// ---------------------------DISPLAY SCOREBOARD/Messages----------------------------------

const options = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.createElement("h1");
const cpuChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const userscore = document.createElement("h1");
const cpuscore = document.createElement("h1");
const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, cpuChoiceDisplay, resultDisplay, userscore, cpuscore);
let userChoice;
let userInput = prompt("name??");
let comChoice;

//--------------------------------------------------
const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = `${userInput} chooses :` + userChoice;
userscore.innerHTML = score
cpuscore.innerHTML = cpuScore
  getComputerChoice();
  play();
  check();
}

for (let i = 0; i < options.length; i++) {
  const button = document.createElement("button");
  button.id = options[i];
  button.innerHTML = options[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}

function getComputerChoice() {
  let cchoice = options[Math.floor(Math.random() * options.length)];
 comChoice = cchoice
  cpuChoiceDisplay.innerHTML = "cpu chooses :" + cchoice;
}

const play = () => {
  switch (userChoice + comChoice) {
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
        resultDisplay.innerHTML = "draw "
      break
    case 'rocksscissors':
    case 'paperrock':
    case 'scissorspaper':
        resultDisplay.innerHTML = "you win! "
        score++;

      break
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        resultDisplay.innerHTML = "you lose!"
        cpuScore++

      break;
  }
}

    function check() {
     {
        // console.log(`Round ${i}`)
        // const player = getPlayerChoice()
        // const computer = getComputerChoice
        // console.log(`Your score = ${score}`, `Cpu-score = ${cpuScore}`)

        if (score == 5 ) { console.log;
            let finalScore =
            `Final score:  ${score} - ${cpuScore}
            User wins the tourney!`
            alert (finalScore)
            location.reload()

        }
        else if (cpuScore == 5 )  {
            let finalScore =
            `Final score:  ${cpuScore} - ${score}
            Cpu wins the tourney!`
            alert (finalScore)
            location.reload()

        }

        }

    }
