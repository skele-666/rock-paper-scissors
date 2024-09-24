/* Old bad code:
                if (humanChoice === computerChoice) {
                    console.log(`It\'s a draw! Both chose ${computerChoice}.`);
                    console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                } else if (humanChoice === 'rock' && computerChoice === 'paper') {
                    console.log(`Computer wins! (${computerChoice})`);
                    computerScore++;
                    console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                    return humanScore, computerScore;
                } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                    console.log(`You win! (${computerChoice})`);
                    humanScore++;
                    console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                    return humanScore, computerScore;
                } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
                    console.log(`Computer wins! (${computerChoice})`);
                    computerScore++;
                    console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                    return humanScore, computerScore;
                } else if (computerChoice === 'rock' && humanChoice === 'paper') {
                    console.log(`You win! (${computerChoice})`);
                    humanScore++;
                    console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                    return humanScore, computerScore;
                } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
                    console.log(`Computer wins! (${computerChoice})`);
                    computerScore++;
                    console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                    return humanScore, computerScore;
                } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
                    console.log(`You win! (${computerChoice})`);
                    humanScore++;
                    console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                    return humanScore, computerScore;
                } else {
                    console.log('Uhhhh....');
                }


                switch (gameRoundNumber) {
                case 1:
                    playRound(humanSelection, computerSelection);
                    break;
                case 2:
                    playRound(humanSelection, computerSelection);
                    break;
                case 3:
                    playRound(humanSelection, computerSelection);
                    break;
                case 4:
                    playRound(humanSelection, computerSelection);;
                    break;
                case 5:
                    function playRound(humanChoice, computerChoice) {
                        console.log(`Computer chose ${computerChoice}.`);

                        let gameRoundNumber = 1;

                        if (humanChoice === computerChoice) {
                            console.log(`It\'s a draw! Both chose ${computerChoice}.`);
                            console.log(`You: ${humanScore}, Computer: ${computerScore}.`);
                        } else if ( // All winning conditions for the player:
                            (humanChoice === 'rock' && computerChoice === 'scissors') ||
                            (humanChoice === 'paper' && computerChoice === 'rock') ||
                            (humanChoice === 'scissors' && computerChoice === 'paper')
                        ) {
                            console.log('You win!');
                            gameRoundNumber++;
                            console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
                            return humanScore;
                        } else {
                            console.log('Computer wins!');
                            computerScore++;
                            console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
                            return computerSccore;
                        }
                    }
                    playRound(humanSelection, computerSelection);
                    break;
                default:
                    console.log('I dunno what\'s happened but something is not working...');
                    break;
            }
        }
        */