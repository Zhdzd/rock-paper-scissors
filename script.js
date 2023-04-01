function getComputerChoice(){
    //to return randomly a string ('Rock','Paper' or 'Scissors')
    //generate a random number from 1 to 100
    let randomNumber = Math.floor(Math.random() * (150) + 1);
    console.log(randomNumber);
    //if random number is 1 to 50, compChoice is rock
    //else if rn is 51 to 100, compChoice is paper
    //else, compChoice is scissors
    let compChoice = "";
    if(randomNumber < 51){
        compChoice = "Rock"
    } else if(randomNumber > 50 && randomNumber < 101){
        compChoice = "Scissors";
    } else {
        compChoice = "Paper";
    }
    return compChoice;
}

console.log(getComputerChoice());