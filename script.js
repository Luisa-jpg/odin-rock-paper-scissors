//getComputerChoice

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice === 1 ? "rock"
        : choice === 2 ? "paper"
        : "scissors";
};

//Scores

let score = [0, 0]; //human, computer
let humanScore = 0;
let computerScore = 0;

const humanPoints = document.querySelectorAll("#humanScore .empty");
const computerPoints = document.querySelectorAll("#computerScore .empty");


//Round

function playRound(computerChoice, humanChoice) {
    const choices = [computerChoice, humanChoice];
    
    if (        //player wins
        (choices[0] === "rock") && (choices[1] === "paper")
        || (choices[0] === "paper") && (choices[1] === "scissors")
        || (choices[0] === "scissors") && (choices[1] === "rock")
    ) {
        ++score[0];
        alert( "You won! Score: " + ++humanScore + " : " + computerScore);
        humanPoints[score[0]-1].classList.add("full");
    } else if ( //computer wins
        (choices[1] === "rock") && (choices[0] === "paper")
        || (choices[1] === "paper") && (choices[0] === "scissors")
        || (choices[1] === "scissors") && (choices[0] === "rock")
    ) {
        ++score[1];
        computerPoints[score[0]-1].classList.add("full");
        alert( "You lost! Score: " + humanScore + " : " + ++computerScore);
    } else {    //draw
        alert( "It's a draw! Score: " + humanScore + " : " + computerScore);
    };
    return score;
};

// Game

function playGame() {
    const message = document.querySelector("#end");
    const btns = document.querySelector(".button-wrapper");

    //while (score[0] < 5 && score[1] < 5) {
    btns.addEventListener('click', (event) => {
        let target = event.target;
        switch (target.id) {
            case 'rockBtn':
                alert("You chose rock!");
                score = playRound(getComputerChoice(), "rock");
                break;
            case 'paperBtn':
                alert("You chose paper!");
                score = playRound(getComputerChoice(), "paper");
                break;
            case 'sciBtn':
                alert("You chose scissors!");
                score = playRound(getComputerChoice(), "scissors");
                break;
        };

        if (score[0] === 5) {
            message.textContent = "Congrats, you won the game!";
        };
        if (score[1] === 5) {
            message.textContent = "You lost the game...";
        };
    });
};

playGame();