const word = document.getElementById('word');
const wrongLettersDiv = document.getElementById('wrong-letters');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const playAgainButton = document.getElementById('play-button');
const popupMsg = document.getElementById('popup-container');

const hangmanFigure= document.querySelectorAll(".figure-part");

const words = ['arbeiten', 'bruder', 'essen', 'haben', 'hallo', 'lernen', 'schwester', 'strasse', 'tisch', 'und', 'ich', 'du', 'er', 'sie', 'wir', 'ihr', 'der', 'die', 'das'];
//const words = ['James', 'Huw', 'run', 'probably', 'hello', 'sleep', 'university', 'tea', 'easter', 'dissertation', 'me', 'fun', 'hangman', 'toilet', 'supernatural', 'spider', 'dragon', 'surfboard', 'windmill'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord(){
    word.innerHTML = `
    ${selectedWord
    .split('')
    .map(
        letter =>`
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
    )
    .join('')}
    `;

    const guessedWord = word.innerText.replace(/\n/g, '');

    if(guessedWord === selectedWord){
        finalMessage.innerText = 'Congratulations, you won! :-)';
        popupMsg.style.display= 'flex';
    }
}

function updateWrongLetterE1(){
    //Display wrong letters
    wrongLettersDiv.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display figure parts
    hangmanFigure.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block'
        }
        else{
            part.style.display = 'none';
        }
    });

    //Check if lost
    if(wrongLetters.length === hangmanFigure.length){
        finalMessage.innerText = 'Sorry, you lost :-(';
        popupMsg.style.display = 'flex';
    }
}

function showNotification(){
    //notification.classList.add('show');
    notification.style.display = 'flex';

    setTimeout(() => {
        //notification.classList.remove('show');
        notification.style.display = 'none';
    }, 2000);
}

//Keydown letter press
window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else{
                showNotification();
            }
        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLetterE1();
            } else{
                showNotification();
            }
        }
    }
});

//Restart game and play again
playAgainButton.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetterE1();

    popupMsg.style.display = 'none';
});

displayWord();