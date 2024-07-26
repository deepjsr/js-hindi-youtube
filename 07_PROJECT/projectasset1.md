# Projects related to DOM

## project link
[ Click here ](https://stackblitz.com/edit/vitejs-vite-ghzmnt?file=index.html&terminal=dev)

## Project one

# Solution code
```javascript

const buttons = document.querySelectorAll('.button');
const body = document.body;
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.id, `Id's`);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```
## Project Two

# Solution code

```Javascript
const form = document.querySelector('form');
// this will give empty value as it will hold valur immidiate after page lode
// const weight=parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // const guid =( bmi < 18.6) ? 'Under Weight' : 'Normal Range';
    // show the result
    // result.innerHTML = `<span>${bmi}</span><br>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span><br> 
      <h5>Under Weight</h5>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>${bmi}</span>
      <h5>Over Weight</h5>`;
    } else {
      result.innerHTML = `<span>${bmi}</span>
      <h2>Normal Range</h2>`;
    }
  }
});
```
## Project Three

# Solution code
```Java Script
const clock = document.querySelector('#clock');
const date = document.querySelector('#date');
const time = new Date();
date.innerHTML = time.toDateString();

setInterval(() => {
  const time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
  // console.log(time.getTime());
}, 1000);

```
## Project four

# Solution code

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let playGame = true;
let reminingGuess = 1;
let previousGuesses = [];

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess, 'guess');
    checkGuess(guess);
  });
}

function checkGuess(guess) {
  console.log(randomNumber);
  if (isNaN(guess)) {
    alert('Please Enter a valid number');
  } else if (guess < 1) {
    alert('Please Enter a valid number greater than 1');
  } else if (guess > 100) {
    alert('Please Enter a  number less then 100');
  } else {
    previousGuesses.push(guess);
    if (reminingGuess === 10) {
      displayNumber(guess);
      displayMessage(`Game Over..! Random Number was ${randomNumber}`);
      endGame();
    } else {
      guessTheNumber(guess);
      displayNumber(guess);
    }
  }
}

function guessTheNumber(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('You guessed it Too low');
  } else if (guess > randomNumber) {
    displayMessage('You guessed it Too high');
  }
}
function clearNumber(guess) {
  //
}

function displayNumber(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  remaining.innerHTML = `${11 - reminingGuess}`;
  reminingGuess++;
}

function displayMessage(message) {
  console.log(message);
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    guessSlot.innerHTML = '';
    reminingGuess = 1;
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    remaining.innerHTML = `${11 - reminingGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
function endGame() {
  (userInput.value = ''), userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new game</>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

```

## Project Five

# Solution code

```Javascript

const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});

```

## Project Six

# Solution code

```Javascript
function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let interval;
const startChangingColor = () => {
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }

  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);

```