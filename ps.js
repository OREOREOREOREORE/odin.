function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) return "rock";
    if (randNum === 1) return "paper";
    return "scissor"; 
}

let humanScore = 0, computerScore = 0;

function playRound(human, computer){
    const container = document.querySelector(".result-container");
    const content = document.createElement("div")

    if (human === "rock" && computer === "scissor" || human === "paper" && computer === "rock" || human === "scissor" && computer === "paper"){
        content.textContent = "You win this round!";
        humanScore++;
    } else if (human === computer) {
        content.textContent = "It's a tie!";
    } else {
        content.textContent = `Computer wins this round! ${computer} beats ${human}`
        computerScore++;
    }
    
    if (humanScore >= 5) content.textContent = `HUMAN WIN!`;
    else if (computerScore >= 5) content.textContent = `$AI WIN`;

    container.appendChild(content);

    

    
      
}

document.addEventListener("DOMContentLoaded", () =>{
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", ()=>{
            const playerSelection = button.textContent.toLowerCase();
            const computerChoice = getComputerChoice();
            playRound(playerSelection, computerChoice);
        })
    })
})

