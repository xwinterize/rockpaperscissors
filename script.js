const computerChoiceDisplay = document.getElementById('computerChoice');
const playerChoiceDisplay = document.getElementById('playerChoice');
const resultDisplay = document.getElementById('results');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
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
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'You Lose! Rock beats Scissors!';
  }
  if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'You Lose! Paper beats Rock!';
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'You Win! Scissors beat Paper!';
  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'You Lose! Scissors beat Paper!';
  }
  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'You Win! Rock beats Scissors!';
  }

  resultDisplay.innerHTML = result;
}
