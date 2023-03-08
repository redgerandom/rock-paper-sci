let score = 0;
let cpuScore = 0;
let lossMessage  = "Cpu won the tourney!"
let winMessage = "You won the tourney! "
let display= "5 points wins the tourney! May the gods be in your favor!"
// ---------------------------DISPLAY SCOREBOARD/Messages----------------------------------

const options = ['rock', 'paper', 'scissors',];
const playerText = document.getElementById("player-choice")
const computerText = document.getElementById("computer-choice")
const userName = document.getElementById("userName")
const scoreBoard = document.getElementById("score-board")
const userscore = document.getElementById('user-score')
const cpuscore = document.getElementById('cpu-score')
const Result = document.getElementById("result")
const rockBtn = document.querySelector("#rock")
const papBtn = document.querySelector("#paper")
const sciBtn = document.querySelector("#scissors")
//--------------------------------------------------

rockBtn.addEventListener('click', () => {
    player = options[0]
    playerText.innerHTML = player
    getComputerChoice()
    play()
    userscore.innerHTML = score
    cpuscore.innerHTML = cpuScore
    Result.innerHTML = result
    check()
    
})

papBtn.addEventListener('click', () => {
    player = options[1]
    playerText.innerHTML = player
    getComputerChoice()
    play()
    userscore.innerHTML = score
    cpuscore.innerHTML = cpuScore
    Result.innerHTML = result
    check()
})

sciBtn.addEventListener('click', () => {
    player = options[2]
    playerText.innerHTML = player
    getComputerChoice()
    play()
    userscore.innerHTML = score
    cpuscore.innerHTML = cpuScore
    Result.innerHTML = result
    check()
})
 let player;

scoreBoard.innerHTML = display 
    
    
    
    // -------------------------Functions End---------------------------------------------------
    
    
    function getComputerChoice() {
    const cchoice = options[Math.floor(Math.random() * (options.length))]
    computerText.innerHTML = cchoice;
}


function play() { 
    
    
    if (playerText.innerHTML === computerText.innerHTML) { 
        console.log(`${playerText.innerHTML} and ${computerText.innerHTML}: Issa tie!`);
        result = "Draw"
        return result
    
}
    else if (playerText.innerHTML === 'rock' && computerText.innerHTML == 'scissors') {
            score++
             console.log(`Cpu chooses ${computerText.innerHTML}`);
             console.log(`Your ${playerText.innerHTML} smashes Cpu's ${computerText.innerHTML}`)
            result = "You win!"    
            return result

            }
            
            else if (playerText.innerHTML === 'paper' && computerText.innerHTML === 'rock')  { 
                score++
                console.log(`Cpu chooses ${computerText.innerHTML}`) 
                console.log(`Your ${playerText.innerHTML} covers Cpu's ${computerText.innerHTML}`)
                result = "You win!"
    return result

            }
                
                else if (playerText.innerHTML === 'scissors' && computerText.innerHTML === 'paper')  { 
                score++;
                console.log(`Cpu chooses ${computerText.innerHTML}`)
                console.log (`Your ${playerText.innerHTML} cuts Cpu's ${computerText.innerHTML} `)
                result =" You win!" 
                return result 
            }
                else if (playerText.innerHTML === 'rock' && computerText.innerHtmlinnerHTML === 'paper')  { console.log(`Cpu chooses ${computerText.innerHTML}`)
                cpuScore++
                console.log( `Cpu's ${computerText.innerHtmlinnerHTML} covers your ${playerText.innerHTML} `)
                result = "You lose :("
                return result
            }
                
                else if (playerText.innerHTML === 'paper' && computerText.innerHTML === 'scissors')  { console.log(`Cpu chooses ${computerText.innerHTML}`)
                cpuScore++
                console.log(`Cpu's ${computerText.innerHTML} cuts your ${playerText.innerHTML} `)
                result ='You lose :('
                return result
            }
                
                else if(playerText.innerHTML === 'scissors' && computerText.innerHTML === 'rock')  { console.log(`Cpu chooses ${computerText.innerHTML}`) 
                cpuScore++
                console.log(`Cpu's ${computerText.innerHTML} smashes your ${playerText.innerHTML}`)
                result ='You lose :('
                return result
            } 
            
            { 
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
  
   
