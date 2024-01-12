'use strict';
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#user-guess');
const submit =  document.querySelector('#btn');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let previousGuesses = [];
let numberOfGuesses = 1;
let playGame = true;

const restartButton = document.createElement('button');

if(playGame) {
    submit.addEventListener('click',(event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(`guess is : ${guess}`);
        validateUserInput(guess);
    });
}
const validateUserInput = (guess) => {
    if(guess < 1) {
        alert("number Should not less than zero ");
        userInput.value = '';
    } else if(guess > 100) {
        alert("number Should not Greater then 100");
        userInput.value = '';
    } else if(isNaN(guess)) {
        alert("Guess should be a Number");
        userInput.value = '';
    } else {
        previousGuesses.push(guess);
        if(numberOfGuesses === 10) {          //TODO: Check Whether Game is Over or Not?
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            validateGuess(guess);
        }
    }
}

const validateGuess = (guess) => {
    if(numberOfGuesses < 11) {
        if(guess === randomNumber) {
            displayMessage('You Guessed Right Number!.');
            endGame();
        } else if(guess < randomNumber) {
            displayMessage('Number is Too LOW');
        } else if(guess > randomNumber) {
            displayMessage(`Number is Too HIGH`);
        }
    }
    else {
        endGame();
    }

}

const displayGuess = (guess) => {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numberOfGuesses++;
    remaining.innerHTML = `${11-numberOfGuesses}`;
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `${message};`
    if(message === "You Guessed Right Number!.") {
        lowOrHi.style.backgroundColor='green';
        lowOrHi.style.color='white';
    }
    else {
        lowOrHi.style.backgroundColor='burlywood'
        lowOrHi.style.color='#212121'
    }

}
const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    playGame = false;

    restartButton.style.backgroundColor='pink';
    restartButton.style.color = 'red';
    const textNode = document.createTextNode('Restart Game');
    restartButton.appendChild(textNode);
    startOver.appendChild(restartButton);

    restartButton.addEventListener('click',(event) => {
        newGame();
    });
}

const newGame = () => {
    playGame = true;
    previousGuesses = [];
    numberOfGuesses = 1;
    document.removeChild(restartButton);
    randomNumber = parseInt(Math.random() * 100 + 1);
}


