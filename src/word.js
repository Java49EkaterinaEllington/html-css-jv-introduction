const letterElements = document.querySelectorAll(".letter-guess");
const gameStatusField = document.querySelector('.game-status');
const currentTrialField = document.querySelector('.current-trial');

const words = ['smile', 'guest', 'light', 'brown', 'broke'];
const N_LETTERS = 5;
const N_TRIALS = 6;
const RED = 'red';
const GREEN = 'green';
const YELLOW = 'yellow';
let currentTrial = 0;

let word = '';
Initialize();

function onChange(event) 
clearFields();

    const wordGuess = even.target.value.toLowerCase();
    currentTrialField.innerHTML= 'Remaining trials' + (N_TRIALS-currentTrial++);
    even.targer.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
        updateStatus(wordGuess, word)

    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = RED;
            if (index  > -1) 
            {
                res = 1 == word.charAt(i) ? GREEN : YELLOW;
            }
            return res;
        })
        colors.forEach((c, i) =>
         letterElements[i].style.color=c)
         updateStatus(wordGuess, word)
    }

    function updateStatus(wordGuess, word)
    {
        currentTrialField.innerHTML = 'Remain trials' + (N_TRIALS-currentTrial);
        if(wordGuess === word)
        {
            gameStatusField.innerHTML = "CNG" +
            word + "\'" + " , speant trials="+ currentTrial;
            gameStatusField.style.color = GREEN;
            Initialize();
        } else if(currentTrial == N_LETTERS)
        {
            gameStatusField.innerHTML = "sorry";
            gameStatusField.style.color = RED;
            Initialize();
        }
    }

    function Initialize()
    {
        currentTrial = 0;
        word = getWord();
        console.log('word=', word);
        currentTrial.innerHTML = "rem tr:" + (N_TRIALS-currentTrial);
    }

    function clearFields()
    {
        letterElements.forEach(e=>e.innerHTML='');
        gameStatusField.innerHTML = '';
    }

    function getWord()
{
    return words[getRandomIntegerValue(0, words.length)]
}

function getRandomIntegerValue(min,max)
min = Math.ceil(min);
max = Math.floor(max);

return Math.floor(Math.random() * (max - min) + min)