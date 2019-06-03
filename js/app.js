// Randomly pick an option for the computer
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// Compare results in each round
function playRound(playerSelection, computerSelection) {

    if(playerSelection == 'rock') {
        switch(computerSelection) {
            case 'scissors':
                console.log('WOHOO!! You win!');
                return 'win';

            case 'paper':
                console.log('You Lose!!');
                return 'lose';

            default:
                console.log('It\'s a tie');
                return 'tie';
        }
    }
    else if (playerSelection == 'scissors') {
        switch(computerSelection) {
            case 'paper':
                console.log('WOHOO!! You win!');
                return 'win';

            case 'rock':
                console.log('You Lose!!');
                return 'lose';

            default:
                console.log('It\'s a tie');
                return 'tie';
        }
    }
    else if (playerSelection == 'paper') {
        switch(computerSelection) {
            case 'rock':
                console.log('WOHOO!! You win!');
                return 'win';

            case 'scissors':
                console.log('You Lose!!');
                return 'lose';

            default:
                console.log('It\'s a tie');
                return 'tie';
        }
    }
}

// Main function of five rounds game
(function game() {
    let playerScore = 0, computerScore = 0;

    for(let i = 0; i < 5; i++) {
        // Case insensitive input
        let playerSelection = prompt('Rock, Paper or Scissors', '').toLowerCase();

        // Ask the user again if input is out of options
        while(playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper') {
            alert('You didn\'t choose from the options above');
            playerSelection = prompt('Rock, Paper or Scissors', '').toLowerCase();
        }

        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        // Keep score of the result in each round
        switch(result) {
            case 'win':
                playerScore++;
                break;

            case 'lose':
                computerScore++;
                break;

        }
    }

    // Check winner after five rounds
    playerScore > computerScore ? console.log('Congratulations You Won the game!') : playerScore < computerScore ? console.log('Hard Luck!! You Lost the game') : 'The game ended in a tie';
})();

