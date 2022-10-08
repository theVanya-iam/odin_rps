const buttons = document.querySelectorAll('.button');
const rock = document.querySelector('.buttonRock');
let scoreBoard = document.querySelector('.score');
let results = document.querySelector('.results');
let roundBoard = document.querySelector('.round');
let playerBoard = document.querySelector('.selection');
let computerBoard = document.querySelector('.botSelection');

let user_score = 0;
let computer_choice;
let roundCount = 1;
const rounds = 25;
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
};

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
};

function chooseWinner() {
    computerPlay();
    if (user_choice === computer_choice){
    return;
    } else if ((computer_choice === 'rock' && user_choice === 'scissors') || 
                (computer_choice === 'paper' && user_choice === 'scissors') ||
                (computer_choice === 'scissors' && user_choice === 'rock')) {
                    user_score = user_score + 1;
                    scoreBoard.textContent = `Score is ${user_score}`;
    } else if ((computer_choice === 'rock' && user_choice === 'paper') ||
                (computer_choice === 'paper' && user_choice === 'rock') || 
                (computer_choice === 'scissors' && user_choice === 'paper')) {
                    user_score = user_score - 1;
                    scoreBoard.textContent = `Score is ${user_score}`;
    } else {
        console.error('Error');
    }
};

function choiceMade() {
    user_choice = this.textContent.toLowerCase();
    chooseWinner();
    console.log({user_choice, computer_choice, user_score});
    roundBoard.textContent = `Round: ${roundCount}`;
    playerBoard.textContent = `Player: ${user_choice}`;
    ++roundCount;
};

buttons.forEach(button => button.addEventListener('click', choiceMade));
buttons.forEach(button => button.addEventListener('click', playGame));

// 2. attach function to choose winner
function playGame() {
    if (roundCount > rounds){
        buttons.forEach(button => button.removeEventListener('click', choiceMade));
        buttons.forEach(button => button.removeEventListener('click', playGame));
        console.log('Game Over');
    };
    return;
}; 

playGame(rounds);