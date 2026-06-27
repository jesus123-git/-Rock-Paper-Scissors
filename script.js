
let computerScore = 0
let humanScore = 0

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getComputerChoice(){
   const random_num = getRandomInt(3)
   if  (random_num == 0){
      return "rock"
   }else if (random_num == 1){
      return "paper"
   }else if (random_num == 2){
      return "scissors"
   }
}


function getHumanChoice(){
   let selection = prompt("Rock , Paper or scissors ? ").toLowerCase()
   return selection

}

function playRound(computerSelection, humanSelection) {
  if (computerSelection === humanSelection) {
    alert("It's a draw");
  } else if (
    (computerSelection === "rock"     && humanSelection === "scissors") ||
    (computerSelection === "paper"    && humanSelection === "rock")     ||
    (computerSelection === "scissors" && humanSelection === "paper")
  ) {
    computerScore++;
    alert("Machine won");
  } else {
    humanScore++;
    alert("YOU won");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);   
