function getComputerChoice(){
    //to return randomly a string ('Rock','Paper' or 'Scissors')
    //generate a random number from 1 to 100
    let randomNumber = Math.floor(Math.random() * (150) + 1);
    //console.log(randomNumber);

    //if random number is 1 to 50, compChoice is rock
    //else if rn is 51 to 100, compChoice is paper
    //else, compChoice is scissors
    let compChoice = "";
    if(randomNumber < 51){
        compChoice = "ROCK"
    } else if(randomNumber > 50 && randomNumber < 101){
        compChoice = "SCISSORS";
    } else {
        compChoice = "PAPER";
    }
    return compChoice;
}

function singleRound(playerSelection, computerSelection){
    //to return declaration of winner
    //playerSelection = playerSelection.toUpperCase();
    let results = "";
    if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        console.log("You lose! Paper beats rock")
        results = "lose";
    } else if(playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        console.log("You lose! Rock beats scissors");
        results = "lose";
    } else if(playerSelection === "PAPER" && computerSelection === "SCISSORS"){
       console.log("You lose! Scissors beats Paper")
        results = "lose";
    } else if(playerSelection === computerSelection){
        console.log("It's a draw !!!");
        results = "draw";
    }else {
        console.log("YOU WIN!!!!")
        results = "win";
    }
    console.log(results);
    return results;
}
//console.log(singleRound("ScisSors", getComputerChoice()));

// function game(){
//     //to play a 5 round game
//     //keep score
//     //report the winner or loser
//     playerSelection = "rock"; 
//    // let playerSelection = prompt("Rock, paper or Scissors?");
//    let playerScore = 0;
//    let compScore = 0;
//     // for(let i = 1; i <=5; i++){
//     //     console.log(`Round ${i}` );
//     //     let result = singleRound(playerSelection,getComputerChoice());
//     //     if(result === 'draw'){
//     //     } else if(result === 'win'){
//     //         playerScore++;
//     //     } else {
//     //         compScore++;
//     //     }
//     // }
//     console.log("==============")
//     console.log("FINAL SCORE");
//     console.log("==============")
//     console.log("Player: " +playerScore + " vs Comp: " + compScore)
//     if(playerScore > compScore){
//         console.log("YOU WIN")
//     } else if(playerScore < compScore){
//         console.log("YOU LOSE")
//     } else {
//         console.log("IT'S A TIE. PLAY AGAIN");
//     }
// }
//game();
function test(){
    alert('test1');
}
const playerRock= document.querySelector('#rock');
const playerSelect = document.querySelectorAll('button');


// playerRock.addEventListener('click', function(){
//     alert('test')
// });
playerSelect.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        alert(`Player choice: ${btn.id}`);
    })
})



