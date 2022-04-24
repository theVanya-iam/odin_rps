let user_score = 0;
let computer_score = 0;

let user_inp = prompt('Choose between Rock, Paper, and Scissors!').toLowerCase();

function rpsChoice() {
        if (user_inp === 'rock'){
            console.log('your rock has arrived');
        } else if (user_inp === 'paper'){
            console.log('your piece of paper has arrived');
        } else if (user_inp === 'scissors'){
            console.log('your scissors have arrived');
        }
    }

rpsChoice();