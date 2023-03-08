workflow

Some I'm visualizing jow i want my game to be  I want a scorboard and a winning message Let's put that into a  section

<!-- let score = 0
let cpuScore = 0;
let message  = "Cpu won the tourney!"
let winMessage = "You won the tourney!" -->

Now tha

Next I'll need some options
all options that the user can use within the rules of the game
let's put that into a section. Put these options into varriables

<!-- const options = ['rock', 'paper', 'scissors',]; -->

Now lets make some functions

we need to make the logic of computers choice


<!-- function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * (options.length))]
    return(choice)} -->


Now we need to set logic of handling the user input
<!-- 
function getPlayerChoice(){
    const userInput = prompt("Type 'r' for Rock, 'p' for Paper or 's' for Scissors. Best of 5 wins!").trim().toLowerCase().charAt
    (0);
    let choice = userInput

 {while ((choice != "r") && (choice != "p") && (choice != "s")) {
    choice = prompt(choice + " is not valid. Please type: 'r' rock or 'p' paper or 's' scissors.");
}
if (choice == 'r') {return options[0]}
e   lse if (choice == 'p') { return  options[1]}

else if (choice == 's') { return  options[2]}
}

} -->

I make sure to handle the invalid input first because that's harder. I do whis with a while loop   


