// Element Selectors
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function getComputerChoice() {
    if ((Math.floor(Math.random() * 100)) <= 33) return 'rock';
    else if (((Math.floor(Math.random() * 100))) <= 66) return 'paper';
    else return 'scissors';
}

function playRound(humanChoice, computerChoice) {
    console.log(`You have chosen ${humanChoice}.`);
    console.log(`Computer has chosen ${computerChoice}.`);

    if (humanChoice === computerChoice) {
        console.log(`It\'s a draw! Both chose ${computerChoice}.`);
    } else if ( // All winning conditions for the player:
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!');
        // humanScore++;
    } else {
        console.log('Computer wins!');
        // computerScore++;
    }

    getComputerChoice();
}

// Event Listeners
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
