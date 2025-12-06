const compChoices = ["rock", "scissors", "paper"];

function getComputerChoice(){
    let randoNum = Math.floor(Math.random() * ((compChoices.length) - 1));
    console.log("The computer choice " + randoNum);
    return compChoices[randoNum];
}

function getHumanChoice(){
    let input = " ";
    while (
        input !== compChoices[0] &&
        input !== compChoices[1] &&
        input !== compChoices[2]
      ) {
        input = prompt();
      }
    
    console.log("You chose: " + input)
    return input;
}

let humanScore = 0;
let computerScore = 0;

let round = 0;

function playRound(getHumanChoice,getComputerChoice){
    let humanChoiceToLowercase = getHumanChoice().toLowerCase();
    let computerChoiceToLowercase = getComputerChoice().toLowerCase();

    if(humanChoiceToLowercase === "rock"  && computerChoiceToLowercase === "paper"){
        round++;
        computerScore++;
        return `Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`
    }

    else if(humanChoiceToLowercase === "rock"  && computerChoiceToLowercase === "scissors"){
        round++;
        humanScore++;
        return `Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`
    }

    else if(humanChoiceToLowercase === "scissors"  && computerChoiceToLowercase === "paper"){
        round++;
        humanScore++;
        return `Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`
    }

    else if(humanChoiceToLowercase === "scissors"  && computerChoiceToLowercase === "rock"){
        round++;
        computerScore++;
        return `Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`
    }

    else if(humanChoiceToLowercase === "paper"  && computerChoiceToLowercase === "rock"){
        round++;
        humanScore++;
        return `Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`
    }

    // cases where computer wins over player
    else if(humanChoiceToLowercase === "paper"  && computerChoiceToLowercase === "scissors"){
        round++;
        computerScore++;
        return `Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`
    }

    // In case of a tie
    else(humanChoiceToLowercase === computerChoiceToLowercase){
        round++;
        return "It's a tie";
    }

}


function playGame(){
    while(round < 3){
        playRound(getHumanChoice(),getComputerChoice());
    }

    if(humanScore > computerScore){
        console.log("You win the game!")
        return "You win the game!";
    }
    else{
        console.log("You lose the game!")
        return "You lose the game!"
    }
}

function main(){
    getHumanChoice();
    getComputerChoice;
    playGame();
}

