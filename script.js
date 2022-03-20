const computerChoiceDisplay = document.getElementById('computerChoice');
const playerChoiceDisplay = document.getElementById('playerChoice');
const resultDisplay = document.getElementById('results');

const possibleChoices = document.querySelectorAll('.choicebutton');

let userChoice;
let computerChoice;
let result;

let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

let playerScoreDisplay = 0;
let computerScoreDisplay = 0;

let winnerDisplay = document.getElementById('winner');

let resetButton = document.getElementById('startNew');

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
    updateScore();
    checkWinner();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = 'Rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'Paper';
  }
  if (randomNumber === 3) {
    computerChoice = 'Scissors';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResults() {
  if (computerChoice === userChoice) {
    result = "It's a Draw!";
  }
  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'You Win! Paper beats Rock!';
    playerScoreDisplay++;
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'You Lose! Rock beats Scissors!';
    computerScoreDisplay++;
  }
  if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'You Lose! Paper beats Rock!';
    computerScoreDisplay++;
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'You Win! Scissors beat Paper!';
    playerScoreDisplay++;
  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'You Lose! Scissors beat Paper!';
    computerScoreDisplay++;
  }
  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'You Win! Rock beats Scissors!';
    playerScoreDisplay++;
  }

  resultDisplay.innerHTML = result;
}

function updateScore() {
  playerScore.innerHTML = playerScoreDisplay;
  computerScore.innerHTML = computerScoreDisplay;
}

function checkWinner() {
  if (playerScoreDisplay === 5) {
    winnerDisplay.innerHTML = 'You Won the Game! Congratulations!';
  } else if (computerScoreDisplay === 5) {
    winnerDisplay.innerHTML = 'Oh no! You Lost to the Computer!';
  }
}

resetButton.addEventListener('click', function newGame() {
  computerChoiceDisplay.innerHTML = '';
  playerChoiceDisplay.innerHTML = '';
  resultDisplay.innerHTML = '';
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  winnerDisplay.innerHTML = '';
});
