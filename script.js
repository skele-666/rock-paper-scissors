// Element Selectors
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');
const result = document.createElement('p');
const winner = document.createElement('p');

function getComputerChoice() {
    if ((Math.floor(Math.random() * 100)) <= 33) return 'rock';
    else if (((Math.floor(Math.random() * 100))) <= 66) return 'paper';
    else return 'scissors';
}

let humanScore = 0;
let computerScore = 0;
let roundsLeft = 5;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! Both chose ${computerChoice}.
        Your score: ${humanScore}
        Computer score: ${computerScore}`;
        roundsLeft--;
        results.appendChild(result);
    } else if ( // All winning conditions for the player:
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result.textContent = `You Win!
        Your score: ${humanScore}
        Computer score: ${computerScore}`;
        results.appendChild(result);
        roundsLeft--;
    } else {
        computerScore++;
        result.textContent = `Computer Wins!
        Your score: ${humanScore}
        Computer score: ${computerScore}`;
        results.appendChild(result);
        roundsLeft--;
    }

    getComputerChoice();

    // Final scores and result
    if (roundsLeft == 0) {
        if (humanScore > computerScore) {
            winner.textContent = 'Congratulations, you won the game!';
            results.appendChild(winner);
        } else if (humanScore < computerScore) {
            winner.textContent = 'Computer won the game. Better luck next time!';
            results.appendChild(winner);
        } else {
            winner.textContent = 'The game ended in a draw!';
            results.appendChild(winner);
        }
    }
}

// Event Listeners
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
