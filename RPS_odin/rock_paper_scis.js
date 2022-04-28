let user_score = 0;
let computer_choice;
let user_inp;
let i;

// get pseudo-random integer between two numbers inclusive of ends
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// random computer  choice between rock, paper or scissors
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

// rock, paper, scissors evaluation for the user

function gameRPS() {
    for (let i = 0; i < 5; i++){
     user_inp = prompt('Choose between Rock, Paper, and Scissors!').toLowerCase();
     computerPlay();
     if (computer_choice === user_inp){
         console.log('It\'s a tie here! The score is ' + user_score);
     } else if (computer_choice === 'rock' && user_score === 'scissors') {
         user_score = ++user_score;
         console.log('Rock break the Scissors! and you lose a point. Your score is ' + user_score);
     } else if (computer_choice === 'rock' && user_score === 'paper') {
         user_score = --user_score;
         console.log('Paper covers Rock! and you win a point! Your score is ' + user_score );
     } else if (computer_choice === 'paper' && user_score === 'scissors') {
         user_score = ++user_score;
         console.log('Scissors cut the Paper! and you win a point! Your score is ' + user_score);
     } else if (computer_choice === 'paper' && user_score === 'rock'){
         user_score = --user_score;
         console.log('Paper covers Rock! and you lose a point... Your score is ' + user_score );
     } else if (computer_choice === 'scissors' && user_score === 'rock'){
         user_score = ++user_score;
         console.log('Rock break the Scissors! and you win a point! Your score is ' + user_score);
     } else if (computer_choice === 'scissors' && user_score === 'paper'){
         user_score = --user_score;
         console.log('Scissors cut the Paper! and you lose a point... Your score is ' + user_score);
     } else {
         console.log('wut');
         console.log(user_inp);
         console.log(computer_choice);

     }
    }
}

gameRPS();

//execution of the game

//computerPlay();
//rpsChoice();
