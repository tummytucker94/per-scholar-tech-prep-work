const compChoices = ["rock", "scissors", "paper"];

function getComputerChoice(){
    let randoNum = Math.floor(Math.random() * compChoices.length);
    console.log("The computer chose: " + compChoices[randoNum]);
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

function playRound(){
    let humanChoiceToLowercase = getHumanChoice().toLowerCase();
    let computerChoiceToLowercase = getComputerChoice().toLowerCase();

    if(humanChoiceToLowercase === "rock"  && computerChoiceToLowercase === "paper"){
        round++;
        computerScore++;
        console.log(`Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`)
        return `Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`;
    }

    else if(humanChoiceToLowercase === "rock"  && computerChoiceToLowercase === "scissors"){
        round++;
        humanScore++;
        console.log(`Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`)
        return `Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`;
    }

    else if(humanChoiceToLowercase === "scissors"  && computerChoiceToLowercase === "paper"){
        round++;
        humanScore++;
        console.log(`Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`);
        return `Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`;
    }

    else if(humanChoiceToLowercase === "scissors"  && computerChoiceToLowercase === "rock"){
        round++;
        computerScore++;
        console.log(`Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`);
        return `Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`;
    }

    else if(humanChoiceToLowercase === "paper"  && computerChoiceToLowercase === "rock"){
        round++;
        humanScore++;
        console.log(`Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`);
        return `Player wins! ${humanChoiceToLowercase} beats ${computerChoiceToLowercase}.`;
    }

    // cases where computer wins over player
    else if(humanChoiceToLowercase === "paper"  && computerChoiceToLowercase === "scissors"){
        round++;
        computerScore++;
        console.log(`Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`);
        return `Computer wins! ${computerChoiceToLowercase} beats ${humanChoiceToLowercase}.`;
    }

    // In case of a tie
    else{
        round++;
        console.log("It's a tie.");
        return "It's a tie";
    }

}


function playGame(){
    while(round < 3){
        playRound();
        console.log(`Round: ${round}.`);
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }

    if(humanScore > computerScore){
        console.log("You win the game!")
        return "You win the game!";
    }

    else{
        console.log("You lose the game!")
        return "You lose the game!";
    }
}

function main(){
    playGame();
}

main();
