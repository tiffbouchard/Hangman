/*----- constants -----*/

const words = ["sunscreen", "tanning", "beach", "swimming", "camping", "travelling"];
const maxMistakes = 9;

/*----- app's state (variables) -----*/

let word;
let lettersGuessed = [];
let letterGuessed;
let mistakesMade;
let wordsCompleted = [];
let wordSplit = [];

/*----- cached element references -----*/

let buttons = document.getElementById("keyboard");
let playAgain = document.getElementById("play-again");
let hangman = document.getElementById("diagram");
let wordToGuess = document.getElementById("word-to-guess");
let hiddenWord = document.getElementById("hidden-word");

let base = document.getElementById("base")
let poleOne = document.getElementById("pole1")
let poleTwo = document.getElementById("pole2")
let poleThree = document.getElementById("pole3")
let head = document.getElementById("head")
let body = document.getElementById("body")
let arms = document.getElementById("arms")
let leg1 = document.getElementById("leg1")
let leg2 = document.getElementById("leg2")

/*----- event listeners -----*/

buttons.addEventListener("click", handleClick);
playAgain.addEventListener("click", init);

/*----- functions -----*/

init();
// wordSplit = word.split("");

function renderRandomWord() {
  word = words[Math.floor(Math.random() * words.length)];
  hiddenWord.textContent = `${word}`

  //take the array with the letters 
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
  //if word is successfully matched add to wordsCompleted
}

function init() {
  renderRandomWord();
  hangman.style.display = "none";
  mistakesMade = 0;
  wordsCompleted = [];
  lettersGuessed = [];
  letterGuessed = null;
}


