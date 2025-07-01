function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) return "rock";
    if (randNum === 1) return "paper";
    return "scissor"; 
}

function getHumanChoice(){
    let user = prompt("Enter Your Choice", "paper");
    return user.toLowerCase();
}

let humanScore = 0, computerScore = 0;

function playRound(human, computer){
    if (human === "rock" && computer === "scissor" || human === "paper" && computer === "rock" || human === "scissor" && computer === "paper"){
         console.log("You win this round!");
         humanScore++;
    } else if (human === computer) {
        console.log("It's a tie!");
    } else {
        console.log(`Computer wins this round! ${computer} beats ${human}`);
        computerScore++;
    }
      
}

function playGame(){
    let round = 5;
    while (round > 0){
        playRound(getHumanChoice(), getComputerChoice());
        --round;
    }
}

playGame()


