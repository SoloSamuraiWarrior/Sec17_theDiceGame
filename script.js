var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector('.img1')
  .setAttribute('src', './images/dice' + randomNumber1 + '.png');

document
  .querySelector('.img2')
  .setAttribute('src', './images/dice' + randomNumber2 + '.png');

var result;
if (randomNumber1 == randomNumber2) {
  result = 'Draw';
} else if (randomNumber1 < randomNumber2) {
  result = 'Player 2 wins';
} else {
  result = 'Player 1 wins';
}

document.querySelector('h1').textContent = result;
