let user_score = 0;
let computer_score = 0;
let computer_choice;

let user_inp = prompt('Choose between Rock, Paper, and Scissors!').toLowerCase();

// get pseudo-random integer between two numbers
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) - min);
    // the maximum is inclusive and the minimum is inclusive
}

// random computer  choice between rock, paper or scissors
function computerPlay (){
    computer_choice = getRandomInt(1,4);
    if (computer_choice === 1) {
        computer_choice = 'rock';
    } else if (computer_choice === 2){
        computer_choice = 'paper';
    } else if (computer_choice === 3){
        computer_choice = 'scissors';
    }
    console.log('the computer\'s choice is ' + computer_choice)
}

// rock, paper, scissors evaluation for the user
function rpsChoice() {
        if (user_inp === 'rock'){
            console.log('your rock has arrived');
        } else if (user_inp === 'paper'){
            console.log('your piece of paper has arrived');
        } else if (user_inp === 'scissors'){
            console.log('your scissors have arrived');
        }
    }

//execution of the game
computerPlay();
rpsChoice();