//Display players scores
let userScore = 0;
let cpuScore = 0;

// create the options
let options = ['Rock', 'Paper', 'Scissors'];

// create computer's logic
function cpuPick() {
    let choice = Math.floor(Math.random() * options.length);

    return options[choice];
}

//Ask user for input
function userPick() {
    let myChoice = prompt("Rock, Paper or Scissors?");
    console.log(typeof(myChoice));

    return myChoice;
}

//play a round
function playRound(user, cpu) {
    if (user == "Rock" && cpu == "Paper") {

        cpuScore++;

        console.log("Paper covers Rock, you lose!");
    } 
    else if (user == 'Paper' && cpu == 'Scissors') {

        cpuScore++;

        console.log("Scissors cuts Paper, you lose!");
    }
    else if (user == 'Scissors' && cpu == 'Rock') {

        cpuScore++;

        console.log("Rock breaks Scissors, you lose!");
    }
    else if (user == 'Rock' && cpu == 'Scissors') {

        userScore++;

        console.log("Rock breaks Scissors, you win!");
    }
    else if (user == 'Scissors' && cpu == 'Paper') {

        userScore++;

        console.log("Scissors cuts Paper, you win!");
    } 
    else if (user == 'Paper' && cpu == 'Rock') {

        userScore++

        console.log("Paper covers Rock, you win!");
    }
    else if (user == cpu) {

        userScore++;
        cpuScore++;

        console.log("Its a Draw!");
    }
}

//play the whole game
let rounds = 5;

function playGame() {
    for (let i = 0; i < rounds; i++) {
        playRound(userPick(), cpuPick());

        console.log(`User Score: ${userScore}, CPU Score: ${cpuScore}`)
    }

    if (userScore > cpuScore) {
        alert("Congratulations you win!")
    } else {
        alert("You lost! Better luck next time")
    }
}

playGame();