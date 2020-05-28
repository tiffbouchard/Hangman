/*----- constants -----*/

const words = [
  "sunscreen",
  "tanning",
  "beach",
  "swimming",
  "camping",
  "travelling",
];
const maxMistakes = 9;

/*----- app's state (variables) -----*/

let word;
let lettersGuessed = [];
let letterGuessed;
let mistakesMade;
let wordsCompleted = [];
let wordSplit = [];
let hiddenWord = [];

/*----- cached element references -----*/

let buttons = document.getElementById("keyboard");
let playAgain = document.getElementById("play-again");
let hangman = document.getElementById("diagram");
let wordToGuess = document.getElementById("word-to-guess");
let hiddenWordEl = document.getElementById("hidden-word");

let base = document.getElementById("base");
let poleOne = document.getElementById("pole1");
let poleTwo = document.getElementById("pole2");
let poleThree = document.getElementById("pole3");
let head = document.getElementById("head");
let body = document.getElementById("body");
let arms = document.getElementById("arms");
let leg1 = document.getElementById("leg1");
let leg2 = document.getElementById("leg2");

/*----- event listeners -----*/

buttons.addEventListener("click", handleClick);
playAgain.addEventListener("click", init);

/*----- functions -----*/

init();

function handleClick(evt) {
  if (evt.target.id === "keyboard") {
    return;
  }
  letterGuessed = evt.target.innerHTML;
  lettersGuessed.push(letterGuessed);
  if (lettersGuessed.includes(letterGuessed)) {
    evt.target.disabled = true;
  }
  console.log(lettersGuessed);
}

function renderRandomWord() {
  word = words[Math.floor(Math.random() * words.length)];
  for (var i = 0; i < word.length; i++) {
    hiddenWord.push("_");
  }
  hiddenWordEl.textContent = `${hiddenWord.join(" ")}`;
}

//use below for mapping when matching letters chosen to letters in the word array
//  wordSplit = word.split("");
//   hiddenWordEl.textContent = `${wordSplit}`;
// hiddenWordEl.style.visibility = "hidden";

function renderLetterMatch() {
  //compare letters from the wordSplit, using
  //compare evt.target to word
  //if word is successfully matched add to wordsCompleted
}

function init() {
  renderRandomWord();
  hangman.style.visibility = "hidden";
  mistakesMade = 0;
  wordsCompleted = [];
  lettersGuessed = [];
  letterGuessed;
  hiddenWord = [];
}

//have button greeting saying Are you ready to play! click yes, clicking yes calls the init function

//if the number of matched letters is equal to the length of the word then DISPLAY YOU GOT IT GREAT JOB
//pop the word that was just solved from the array so the next time around it does not show up
//and after 5 seconds show a new word
//must generate the new word from the

//mistakesMade++
//when mistakes > maxMistakes return; and display BETTER LUCK NEXT TIME!

//make a secretword that is just dashes....make this display
//
