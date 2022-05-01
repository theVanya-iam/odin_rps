let user_score = 0;
let computer_score = 0;
let computer_choice;
const noWinner = 'There is no winner! It\'s a tie';
const userWinner = 'Computer is DED, you get 1 point!';
const userLoser = 'Computer WINs, finish him VISTA!';

// returns integer number within specified range inclusive of both ends.
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// makes choice for computer between rock, paper, and scissors.
function computerPlay (){
    computer_choice = getRandomInt(1,3);
    if (computer_choice === 1) {
        computer_choice = 'rock';
    } else if (computer_choice === 2){
        computer_choice = 'paper';
    } else if (computer_choice === 3){
        computer_choice = 'scissors';
    }
}

// returns outcome of the rock, paper, scissors game between user and comuter.

function chooseWinner() {

// list all the ties when score does not changes
if (user_choice == computer_choice){
    console.log(noWinner);
} else if (computer_choice === 'rock' && user_choice === 'scissors' || 
            computer_choice === 'paper' && user_choice === 'scissors' ||
            computer_choice === 'scissors' && user_choice === 'rock') {
                user_score = user_score + 1;
                console.log(userWinner);
                console.log('Your score is ' + user_score);
                console.log('And the machine\'s score is ' + computer_score);
} else if (computer_choice === 'rock' && user_choice === 'paper' ||
            computer_choice === 'paper' && user_choice === 'rock' || 
            computer_choice === 'scissors' && user_choice === 'paper') {
                computer_score = computer_score + 1;
                console.log(userLoser);
                console.log('Your score is ' + user_score);
                console.log('And the machine\'s score is ' + computer_score);
            } else {
                console.log('we have a problem');
            }

}

// function 'play round' instead of just a game. By the end of the execution scores change and round number goes u


function playGame() {
    let roundCount;
    for (roundCount = 1 ; roundCount < 6; ++roundCount){
    user_choice = prompt('Choose between Rock, Paper, and Scissors! Type your answer.').toLowerCase();
    console.log('It is ROUND ' + roundCount);
    computerPlay();
    chooseWinner();
   
    }
}


playGame();