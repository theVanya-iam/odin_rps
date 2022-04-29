let computer_choice;
let user_score = 0;
let user_inp;

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
function gameRPS() {
    for (let i = 0; i < 100; i++){
     user_inp = prompt('Choose between Rock, Paper, and Scissors!').toLowerCase();
     computerPlay();
     if (computer_choice === user_inp){
         console.log('It\'s a tie here! The score is ' + user_score);
     } else if (computer_choice === 'rock' && user_inp === 'scissors') {
         user_score = ++user_score;
         console.log('Rock breaks the Scissors! and you lose a point. Your score is ' + user_score);
     } else if (computer_choice === 'rock' && user_inp === 'paper') {
         user_score = --user_score;
         console.log('Paper covers Rock! and you win a point! Your score is ' + user_score );
     } else if (computer_choice === 'paper' && user_inp === 'scissors') {
         user_score = ++user_score;
         console.log('Scissors cut the Paper! and you win a point! Your score is ' + user_score);
     } else if (computer_choice === 'paper' && user_inp === 'rock'){
         user_score = --user_score;
         console.log('Paper covers Rock! and you lose a point... Your score is ' + user_score );
     } else if (computer_choice === 'scissors' && user_inp === 'rock'){
         user_score = ++user_score;
         console.log('Rock breaks the Scissors! and you win a point! Your score is ' + user_score);
     } else if (computer_choice === 'scissors' && user_inp === 'paper'){
         user_score = --user_score;
         console.log('Scissors cut the Paper! and you lose a point... Your score is ' + user_score);
     } else {
         console.log('I don\'t get it. Something is off with the input.');
         console.log(user_inp);
         console.log(computer_choice);

     }
    }
}

gameRPS();

//execution of the game

//computerPlay();
//rpsChoice();
