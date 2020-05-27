/*----- constants -----*/

const words = ["sunscreen", "tanning", "beach", "swimming"];
const maxMistakes = 9;

/*----- app's state (variables) -----*/

let word;
let lettersGuessed = [];
let letterGuessed;
let mistakesMade;
let wordsCompleted = [];

/*----- cached element references -----*/

let buttons = document.getElementById("keyboard");
let playAgain = document.getElementById("play-again");
let hangman = document.getElementById("diagram");

/*----- event listeners -----*/

buttons.addEventListener("click", handleClick);
playAgain.addEventListener("click", init);

/*----- functions -----*/

function generateRandomWord() {
  word = words[Math.floor(Math.random() * words.length)];
  
  // document.getElementById("words-to-guess").appendChild('word');
  //separate the word into its letters
  //replace these letters with underscores instead
}

function showWordLetters() {
  //turn word into blank spaces that display only when letters is guessed right
}

function handleClick(evt) {
  if (evt.target.id === "keyboard") {
    return;
    } letterGuessed = evt.target.innerHTML;
  lettersGuessed.push(letterGuessed);
  if (lettersGuessed.includes(letterGuessed)) {
    evt.target.disabled = true; 
    } 
    console.log(lettersGuessed);
  }
 


function renderWordMatch() {

  //grab word from word variable
  //compare letters from the word
  //compare evt.target to word
}

function init() {
  hangman.style.display = "hidden";
  mistakesMade = 0;
  wordsCompleted = [];
  lettersGuessed = [];
  generateRandomWord();
}


