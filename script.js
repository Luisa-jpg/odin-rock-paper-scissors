//Step 1: getComputerChoice

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice === 1 ? "rock"
        : choice === 2 ? "paper"
        : "scissors";
}


//Step 2: getHumanChoice

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors - make your choice!").toLowerCase();
    return choice === "rock" || choice === "paper" || choice === "scissors" ? choice
    : alert( "Please input rock, paper or scissors." );
}


//Step 3: Scores

let humanScore = 0;
let computerScore = 0;

//Step 4: Round
const points = document.querySelectorAll(".points div");
console.log(points);

function youLose() {
    alert( "You lost! Score: " + humanScore + " : " + ++computerScore);
    return computerScore;
}

function youWin() {
    alert( "You won! Score: " + ++humanScore + " : " + computerScore);
    return humanScore;
}

function draw() {
    alert( "It's a draw! Score: " + humanScore + " : " + computerScore);
}

function playRound(computerChoice, humanChoice) {
    switch (humanChoice) {
        case "rock": switch (computerChoice) {
            case "paper":
                youLose();
                return computerScore;
                break;
            case "scissors":
                youWin();
                return humanScore;
                break;
            default:
                draw()
                break;
        }   break;
        case "paper": switch (computerChoice) {
            case "scissors":
                youLose();
                return computerScore;
                break;
            case "rock":
                youWin();
                return humanScore;
                break;
            default:
                draw()
                break;
        }   break;
        case "scissors": switch (computerChoice) {
            case "rock":
                youLose();
                return computerScore;
                break;
            case "paper":
                youWin();
                return humanScore;
                break;
            default:
                draw()
                break;
        }   break;
    }
}


function playGame() {
    /*for (let round = 1; round < 6; round++) {
        console.log("Round " + round + " of 5")
        console.log(playRound(getComputerChoice(), getHumanChoice()))
    }*/
    const message = document.querySelector("#end");
    const btns = document.querySelector(".button-wrapper");

    btns.addEventListener('click', (event) => {
        let target = event.target;
        switch (target.id) {
            case 'rockBtn':
                alert("You chose rock!");
                alert(playRound(getComputerChoice(), "rock"));
                break;
            case 'paperBtn':
                alert("You chose paper!");
                alert(playRound(getComputerChoice(), "paper"));
                break;
            case 'sciBtn':
                alert("You chose scissors!");
                alert(playRound(getComputerChoice(), "paper"));
                break;
        }
    });

    if (humanScore > computerScore) {
        message.textContent = "Congrats, you won the game!";
    } else if (humanScore < computerScore) {
        message.textContent = "You lost the game...";
    };
}

playGame()