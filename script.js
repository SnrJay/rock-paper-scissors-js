//Display players scores
let userScore = 0;
let cpuScore = 0;



// create computer's logic
function cpuPick() {
    // create the options
    let options = ['rock', 'paper', 'scissors'];

    let choice = Math.floor(Math.random() * options.length);

    return options[choice];
}

//Ask user for input
function userPick() {
    let myChoice = prompt("Rock, Paper or Scissors?");
    //console.log(typeof(myChoice));

    return myChoice.toLowerCase();
}

//play a round
function playRound(user, cpu) {

    let winObj = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (user === cpu) {

        userScore++;
        cpuScore++;

        console.log("Its a Draw!");
    }
    else if (winObj[user] === cpu) {

        userScore++;

        console.log(`${user} beats ${cpu}, You Win!`);
    }
    else {

        cpuScore++;

        console.log(`${cpu} beats ${user}, You Lose!`);
    } 
}

//play the whole game
let rounds = 5;

function playGame() {
    for (let i = 0; i < rounds; i++) {
        playRound(userPick(), cpuPick());

        console.log(`User Score: ${userScore}, CPU Score: ${cpuScore}`)
    }

    if (userScore === cpuScore) {
        alert("its a Draw!");
    } else if (userScore > cpuScore) {
        alert("Awesome you win!");
    } else {
        alert("Better luck next time");
    }
}

playGame();