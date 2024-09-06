const choices = ['Rock', 'Paper', 'Scissors'];
const userImages = {
  Rock: 'images/png-transparent-rock-paper-scissors-computer-icons-scissors-game-white-face-thumbnail.png',
  Paper: 'images/paper.png',
  Scissors: 'images/sissor.png',
};
const computerImages = {
  Rock: 'images/rock.png',
  Paper: 'images/paper2.png',
  Scissors: 'images/sisor.png',
};

let userScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', function () {
    const userChoice = this.alt;
    const computerChoice = generateComputerChoice();
    updateImages(userChoice, computerChoice);
    determineWinner(userChoice, computerChoice);
  });
});

function generateComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function updateImages(userChoice, computerChoice) {
  document.getElementById('user-choice-img').src = userImages[userChoice];
  document.getElementById('computer-choice-img').src = computerImages[computerChoice];
}

function determineWinner(userChoice, computerChoice) {
  let resultText = '';

  if (userChoice === computerChoice) {
    resultText = "It's a draw!";
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper') ||
    (userChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    resultText = 'You win!';
    userScore++;
  } else {
    resultText = 'Computer wins!';
    computerScore++;
  }

  document.getElementById('result-text').textContent = resultText;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}
