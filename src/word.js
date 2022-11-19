const words = [['hero dota', 'pudge'], ['smartest animal in the world?', 'monkey'], ['season', 'winter'], ['color', 'pink'], ['number', 'one']];
let word;
let index = 0;
let searchWordArr = [];
const sectionElement = document.querySelector(".word-guess");
let searchWordArrLen = 0;

sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const trialNumberElement = document.querySelector(".trial-number");
const wordTrialsElement = document.querySelector(".word-trial");
const gameOverElement = document.querySelector(".game-over-message");
const invitationElement = document.querySelector(".guess-invitation");

let gameOver = false;
let trials = 0;

function getDivsElements() {
    index = Math.floor(Math.random() * words.length);
    console.log('word=', words[index][1]);
    word = words[index][1];
    searchWordArr = Array.from(word);
    let res = searchWordArr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');

}

function showTrialMessage(trials, word) {
    trialNumberElement.innerHTML = `you have done ${trials} guess trials`;
    wordTrialsElement.innerHTML = `word is - ${word}`;
}

function startGame() {
    if (gameOver) {
        sectionElement.innerHTML = getDivsElements();
        gameOver = false;
    } else
        trials = 0;
    searchWordArrLen = 0;
    gameOver = false;
    gameOverElement.innerHTML = "";
    invitationElement.innerHTML = `guess the word as "${words[index][0]}"`;
}

function onChange(event) {
    let wordGuess = event.target.value.toLowerCase();
    event.target.value = '';
    if (gameOver) {
        alert("game is over");
        return;
    } else
        trials++;
    showTrialMessage(trials, wordGuess);
    const wordAr = Array.from(wordGuess);
    let colors = searchWordArr.map((l) => {
        return wordAr.includes(l) ? 'white' : 'black';
    })
    colors.forEach((c, i) => {
        if (c === 'white') {
            if (letterElements[i].style.background !== 'white') {
                searchWordArrLen++;
                letterElements[i].style.background = c;
            }
        }
    });
    if (searchWordArrLen === searchWordArr.length) {
        endGame(true);
    }
}
function endGame(isSuccess) 
{
    if (isSuccess) 
    {
        gameOverElement.innerHTML = `u are winner! ${trials}`;
        gameOverElement.style.color = "green";
        invitationElement.innerHTML = '';
    } else
        trialNumberElement.innerHTML = '';
    wordTrialsElement.innerHTML = '';
    gameOver = true;
    index = 0;
}

startGame();

