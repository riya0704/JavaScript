let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('#guesses');
const remaining = document.querySelector('#lastResult');
const lowOrHi = document.querySelector('#lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        
        validateGuess(guess);
    })
}

function validateGuess(guess){
    //is guess valid number 
    if (isNaN(guess)) {
        alert('Please Enter Valid Number');
    }else if(guess < 1){
        alert('Please Enter Number Between 1 and 100');
    }else if(guess > 100){
        alert('Please Enter Number Between 1 and 100');
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number Was : ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
 if (guess === randomNumber) {
    displayMessage('You Guessed it right !');
    endGame();
 }else if(guess < randomNumber){
    displayMessage('Number is Too Low');
 }else if(guess > randomNumber){
    displayMessage('Number is Too high');
 }
}


function displayGuess(guess){
 userInput.value = '';
 guessSlot.innerHTML += `${guess} , `;
 numGuess++;
 remaining.innerHTML = `${11-numGuess}`;
}


function displayMessage(message){
    //display message to user
  lowOrHi.innerHTML = `<h2>${message}</h2>`; 
  
console.log(lowOrHi);   
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame(); 
}
function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
randomNumber =  parseInt(Math.random()*100+1);
prevGuess=[]
numGuess =1;
guessSlot.innerHTML = '';
remaining.innerHTML =  `${11 - numGuess}`;
userInput.removeAttribute('disabled')
startOver.removeChild(p);
playGame = true;
})
}

