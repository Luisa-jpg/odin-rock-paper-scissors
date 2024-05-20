//getComputerChoice

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice === 1 ? "rock"
        : choice === 2 ? "paper"
        : "scissors";
};

// Scores

let score = [0, 0]; //human, computer
let humanScore = 0;
let computerScore = 0;

const humanPoints = document.querySelectorAll("#humanScore .empty");
const computerPoints = document.querySelectorAll("#computerScore .empty");

// Status 
const statusDiv = document.querySelector(".status");
const statusP = document.querySelector(".status p");
const ComMessage = "The computer chose ";
const wMessage = "You won. ";
const lMessage = "You lost. ";
const drawMessage = "It's a draw. ";
const replayIcon = document.createElement("i");

const message = document.querySelector("#end");
const btns = document.querySelector(".button-wrapper");


// Round

function playRound(computerChoice, humanChoice) {
    const choices = [computerChoice, humanChoice];

    if (        //player wins
        (choices[0] === "rock") && (choices[1] === "paper")
        || (choices[0] === "paper") && (choices[1] === "scissors")
        || (choices[0] === "scissors") && (choices[1] === "rock")
    ) {
        ++score[0];
        humanPoints[score[0]-1].classList.add("full");
        statusP.textContent = wMessage + ComMessage + computerChoice + "!";
    } else if ( //computer wins
        (choices[1] === "rock") && (choices[0] === "paper")
        || (choices[1] === "paper") && (choices[0] === "scissors")
        || (choices[1] === "scissors") && (choices[0] === "rock")
    ) {
        ++score[1];
        computerPoints[score[1]-1].classList.add("full");
        statusP.textContent = lMessage + ComMessage + computerChoice + "!";
    } else {    //draw
        statusP.textContent = drawMessage + ComMessage + computerChoice + "!";
    };
    
    return score;
};

// Game

function playGame() {
    btns.addEventListener('click', (e) => { ; //mit closest() lösen?
        switch (e.target.id) {
            case 'rockBtn':
                score = playRound(getComputerChoice(), "rock");
                break;
            case 'paperBtn':
                score = playRound(getComputerChoice(), "paper");
                break;
            case 'sciBtn':
                score = playRound(getComputerChoice(), "scissors");
                break;
        };

        if (score[0] === 5) {
            message.textContent = "Congrats, you won the game!";
            endGame();
        };
        if (score[1] === 5) {
            message.textContent = "You lost the game...";
            endGame();
        };
    }, false);
};

function endGame() {
    statusDiv.insertBefore(replayIcon, statusP);
    statusDiv.classList.add("status-button");
    statusP.textContent = "  replay";

    replayIcon.classList.add("fa-solid", "fa-rotate", "fa-spin");

    statusDiv.addEventListener("click", reset);
};

function reset() {
    statusDiv.removeChild(replayIcon);
    statusDiv.classList.remove("status-button");
    statusP.textContent = "Make a choice!";
    message.textContent = "";
    
    for (const el of humanPoints) {
        el.classList.remove("full");
        el.classList.add("empty");
    };
    for (const el of computerPoints) {
        el.classList.remove("full");
        el.classList.add("empty");
    };

    score = [0, 0];
};

playGame();

