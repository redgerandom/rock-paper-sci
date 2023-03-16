let score = 0;
let cpuScore = 0;
let lossMessage = "Cpu won the tourney!";
let winMessage = "You won the tourney! ";
let display = "5 points wins the tourney! May the gods be in your favor!";
// ---------------------------DISPLAY SCOREBOARD/Messages----------------------------------

const options = ["rock", "paper", "scissors"];
const resultDisplay = document.querySelector('#result');
const optionsDisplay = document.querySelector('#options');
const scoreboardDisplay= document.querySelector('#scoreboard')

//--------------------------------------------------
const handleClick= (e) =>{ 
  const userChoice = e.target.innerHTML
  const comChoice =options[Math.floor(Math.random() * options.length)]
  scoreboardDisplay.innerHTML = "Scoreboard:" + [`User : ${score}, Cpu : ${cpuScore}`]
  getResults(userChoice, comChoice)
  console.log("clicked");
  check()  

}


options.forEach(option =>{
  const button = document.createElement('button')
  button.innerHTML = option
  button.addEventListener('click', handleClick)
  optionsDisplay.appendChild(button)
   
})


function getResults(userChoice, comChoice) {
  switch (userChoice + comChoice) {
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      resultDisplay.innerHTML = `${userChoice} vs ${comChoice}:draw `;
      break;
    case 'rocksscissors':
    case 'paperrock':
    case 'scissorspaper':
      resultDisplay.innerHTML = `${userChoice} vs ${comChoice}:you win! `;
      score++;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
    resultDisplay.innerHTML = `${userChoice} vs ${comChoice}:you lose! `;
      cpuScore++;
      break;
  }
}

    function check() {
     {

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
