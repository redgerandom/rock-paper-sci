let score = 0
let cpuScore = 0;
let message  = "Cpu won the tourney!"
let winMessage = "You won the tourney!"

// ---------------------------DISPLAY SCOREBOARD/Messages----------------------------------


const options = ['rock', 'paper', 'scissors',];


// -------------------------Functions End---------------------------------------------------


function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * (options.length))]
    return(choice)  
    
}

function getPlayerChoice(){
    const userInput = prompt("Type 'r' for Rock, 'p' for Paper or 's' for Scissors. Best of 5 wins!").trim().toLowerCase().charAt
    (0);
    let choice = userInput

 {
    
    while ((choice != "r") && (choice != "p") && (choice != "s")) {
    choice = prompt(choice + " is not valid. Please type: 'r' rock or 'p' paper or 's' scissors.");

   }

if (choice == 'r') {return options[0]}

else if (choice == 'p') { return  options[1]}

else if (choice == 's') { return  options[2]}

  }

}


function play(playerSelection, computerSelection) { 
    
    
    if (playerSelection ===  computerSelection ) { 
        console.log(`${playerSelection} and ${computerSelection}: Issa tie!`);
    
    return "Draw";
    
}
    else if (playerSelection === 'rock' && computerSelection === 'scissors') { console.log(`Cpu chooses ${computerSelection}`);
             console.log(`Your ${playerSelection} smashes Cpu's ${computerSelection} :`)
             score++
             return "You win!"
            }
            
            else if (playerSelection === 'paper' && computerSelection === 'rock')  { 
                console.log(`Cpu chooses ${computerSelection}`) 
                console.log(`Your ${playerSelection} covers Cpu's ${computerSelection}`)
                score++
                return "You win!"}
                
                else if (playerSelection === 'scissors' && computerSelection === 'paper')  { 
                console.log(`Cpu chooses ${computerSelection}`)
                console.log(`Your ${playerSelection} cuts Cpu's ${computerSelection} `)
                score++;
                return " You win!" 
            }
                else if (playerSelection === 'rock' && computerSelection === 'paper')  { console.log(`Cpu chooses ${computerSelection}`)
                console.log( ` Cpu's ${computerSelection} covers your ${playerSelection} `)
                cpuScore++
                return 'You lose :('}
                
                else if (playerSelection === 'paper' && computerSelection === 'scissors')  { console.log(`Cpu chooses ${computerSelection}`)
                console.log(`Cpu's ${computerSelection} cuts your ${playerSelection} `)
                cpuScore++
                return 'You lose :('}
                
                else if (playerSelection === 'scissors' && computerSelection === 'rock')  { console.log(`Cpu chooses ${computerSelection}`) 
                console.log(`Cpu's ${computerSelection} smashes your ${playerSelection}`)
                cpuScore++
                return 'You lose :('}


                else { getPlayerChoice()
                    
            }
                
            }

            


function game() {
    
    
    for (let i = 1; i <= 1; i++) { 
        console.log(`Round ${i}`)
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection));
        console.log(`Your score = ${score}`, `Cpu-score = ${cpuScore}`)
        

        if (i == 1) {if (score > cpuScore) { console.log(winMessage);
        }
        else if (score == cpuScore) {console.log('A draw!!!');}

        else {console.log(message);}

        }

    } 
    

  
}   
// -------------------------------Functions END----------------------------------------------------

console.log('Rocks, papers , scissors tourney begin!');
game()

