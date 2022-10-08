const buttons = document.querySelectorAll('.button');
const rock = document.querySelector('.buttonRock');
let scoreBoard = document.querySelector('.score');
let results = document.querySelector('.results');
let roundBoard = document.querySelector('.round');
let playerBoard = document.querySelector('.selection');
let computerBoard = document.querySelector('.botSelection');

roundBoard.textContent = 'Round: 0';
let user_score = 0;
let computer_score = 0;
let computer_choice;
let roundCount = 1;
const rounds = 5;
const noWinner = 'There is no winner! It\'s a tie';
const userWinner = 'Computer is DED, you get 1 point!';
const userLoser = 'Computer WINs, finish him VISTA!';

// 1) Page states what to do
// 2) Page plays the game and tells you the result
// 3) Score is adjusted
// 4) Next round starts
// 5) Game stops declaring final results after Round 5

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay (){
    computer_choice = getRandomInt(1,3);
    if (computer_choice === 1) {
        computer_choice = 'rock';
    } else if (computer_choice === 2){
        computer_choice = 'paper';
    } else if (computer_choice === 3){
        computer_choice = 'scissors';
    }
    computerBoard.textContent = `Computer: ${computer_choice}`;
}
function chooseWinner() {
if (user_choice == computer_choice){
    //console.log(noWinner);
    } else if (computer_choice === 'rock' && user_choice === 'scissors' || 
                computer_choice === 'paper' && user_choice === 'scissors' ||
                computer_choice === 'scissors' && user_choice === 'rock') {
                    user_score = user_score + 1;
                    //console.log(userWinner);
                    //console.log('Your score is ' + user_score);
                    //console.log('And the machine\'s score is ' + computer_score);
        } else if (computer_choice === 'rock' && user_choice === 'paper' ||
                    computer_choice === 'paper' && user_choice === 'rock' || 
                    computer_choice === 'scissors' && user_choice === 'paper') {
                        computer_score = computer_score + 1;
                        //console.log(userLoser);
                        //console.log('Your score is ' + user_score);
                        //console.log('And the machine\'s score is ' + computer_score);
            } else {
                        //console.log('we have a problem');
            }

}

function choiceMade() {
    user_choice = this.textContent.toLowerCase();
    console.log({roundCount, rounds, user_choice});
    roundBoard.textContent = `Round: ${roundCount}`;
    playerBoard.textContent = `Player: ${user_choice}`;
    ++roundCount;
}

buttons.forEach(button => button.addEventListener('click', choiceMade));
buttons.forEach(button => button.addEventListener('click', computerPlay));
buttons.forEach(button => button.addEventListener('click', playGame));

// 1. attach computers selection to each round
// 2. attach function to choose winner
function playGame() {
    if (roundCount > rounds){
        buttons.forEach(button => button.removeEventListener('click', choiceMade));
        buttons.forEach(button => button.removeEventListener('click', computerPlay));
        buttons.forEach(button => button.removeEventListener('click', playGame));
        console.log('Game Over');
    };
    return;
}; 

playGame(rounds);