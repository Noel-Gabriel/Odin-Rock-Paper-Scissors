// possible moves
let moves = ["rock", "paper", "scissors"] 
const NUM_OF_ROUNDS = 5;

// scores
let player_wins = 0;
let computer_wins = 0;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function getComputerChoice() {
    let index = Math.floor(Math.random() * 100) % 3;
    return moves[index];
}

function getPlayerChoice() {
    while(true) {
        playerMove = prompt("Your move?").toLowerCase();
        if(!moves.includes(playerMove)) {
            alert("Not a valid move. Rock, Paper or Scissors please!");
        } else {
            break;
        }
    }
    return playerMove;
}

// evaluation of one round
let lost = (p, c) => {++computer_wins; return `You lost! ${capitalize(c)} beats ${capitalize(p)}!`}
let won =  (p, c) => {++player_wins; return `You Won! ${capitalize(p)} beats ${capitalize(c)}!`}

function evaluateRound(player, computer) {
    if(player === computer) {
        return `A Draw! Both chose ${capitalize(player)}!`;
    }
    let ans = "";
    switch(player) {
        case "scissors":
            if(computer === "paper") {
                ans = won(player, computer);
            } else {
                ans = lost(player, computer);
            }
            break;
        case "rock":
            if(computer === "paper") {
                ans = lost(player, computer);
            } else {
                ans = won(player, computer);
            }
            break;
        case "paper":
            if(computer === "rock") {
                ans = won(player, computer);
            } else {
                ans = lost(player, computer);
            }
            break;
        default: return "Error";
    }
    return ans;
}

// evaluation of whole game (scores)
function evaluateGame() {   
    let ans = `Player: ${player_wins} wins, Computer: ${computer_wins} wins. `;
    if(player_wins === computer_wins) {
        return ans + "Game ended in a draw!";
    }
    return (ans + ((player_wins > computer_wins)? "You win!" : "You lost!"));
}

// main loop
function gameLoop() {
    for(let i = 1; i <= NUM_OF_ROUNDS; ++i) {
        let computer = getComputerChoice();
        let player = getPlayerChoice();
        let round = evaluateRound(player, computer);
        alert(round);
        console.log(round); // debug
    }
    let game = evaluateGame();
    alert(game);
    console.log(game); // debug
}

gameLoop();
