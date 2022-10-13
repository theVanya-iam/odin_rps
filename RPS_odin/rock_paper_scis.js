const buttons = document.querySelectorAll('.button');
const rock = document.querySelector('.buttonRock');
let scoreBoard = document.querySelector('.score');
let results = document.querySelector('.results');
let playerBoard = document.querySelector('.selection');
let computerBoard = document.querySelector('.botSelection');
let title = document.querySelector('.title');

let user_score = 0;
let computer_choice;
let roundCount = 1;
const rounds = 5;
const noWinner = 'There is no winner! It\'s a tie';
const userWinner = 'Computer is DED, you get 1 point!';
const userLoser = 'Computer WINs, finish him VISTA!';

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
    } else if ((computer_choice === 'rock' && user_choice === 'paper') || 
                (computer_choice === 'paper' && user_choice === 'scissors') ||
                (computer_choice === 'scissors' && user_choice === 'rock')) {
                    user_score = user_score + 1;
                    scoreBoard.textContent = `Score is ${user_score}`;
    } else if ((computer_choice === 'rock' && user_choice === 'scissors') ||
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
    title.textContent = `Round: ${roundCount}`;
    playerBoard.textContent = `Player: ${user_choice}`;
    ++roundCount;
};

buttons.forEach(button => button.addEventListener('click', choiceMade));
buttons.forEach(button => button.addEventListener('click', playGame));

function playGame() {
    if (roundCount > rounds){
        buttons.forEach(button => button.removeEventListener('click', choiceMade));
        buttons.forEach(button => button.removeEventListener('click', playGame));
        scoreBoard.textContent = user_score > 0 ? 'You win!' : 'Computer wins!';
        title.classList.remove = 'round';
        results.textContent = '';
    } else if (user_score === -5){
        results.textContent = 'Wow, you have reached the lowest point humanity thought was unreachable.';
    } else if (user_score === -4){
        results.textContent = 'How much lower can you go?';
    } else if (user_score === -3){
        results.textContent = 'Computers likely will prevail!';
    } else if (user_score === -2){
        results.textContent = 'Ouch, it hurts to lose to computer!';
    } else if (user_score === -1){
        results.textContent = 'Computer won!';
    } else if (user_score === 0){
        results.textContent = '';
    } else if (user_score === 1){
        results.textContent = 'You got this!';
    } else if (user_score === 2){
        results.textContent = 'You scored two!';
    } else if (user_score === 3){
        results.textContent = 'Hurray!';
    } else if (user_score === 4){
        results.textContent = 'Damn, you may be the best player ever.';
    } else if (user_score === 5){
        results.textContent = 'YOU ARE.';
    }

    return;
}; 

playGame(rounds);