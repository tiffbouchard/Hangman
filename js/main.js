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
let correctGuesses;
let mistakesMade;
let wordsCompleted = [];
let wordSplit = [];
let hiddenWord;
let currentWords = [];

/*----- cached element references -----*/

let buttons = document.getElementById("keyboard");
let hangman = document.getElementById("diagram");
let wordToGuess = document.getElementById("word-to-guess");
let hiddenWordEl = document.getElementById("hidden-word");
let startButton = document.getElementById("start");
let msg = document.getElementById("msg");
let shownWordEl = document.getElementById("shown-word");
let lettersLeft = document.getElementById("letters-left");

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

startButton.addEventListener("click", start);
buttons.addEventListener("click", handleClick);

/*----- functions -----*/

function handleClick(evt) {
  if (evt.target.id === "keyboard") {
    return;
  } 
  letterGuessed = evt.target.innerHTML;
  lettersGuessed.push(letterGuessed);
  renderLetterMatch();
  if (lettersGuessed.includes(letterGuessed)) {
    evt.target.disabled = true;
  } 
}

function renderRandomWord() {
  word = words[Math.floor(Math.random() * words.length)];
  word = word.toUpperCase();
  currentWords.push(word);
  shownWordEl.textContent = word;
  for (let i = 0; i < word.length; i++) {
    hiddenWord.push("_");
  }
  hiddenWordEl.textContent = `${hiddenWord.join("")}`;
}

function renderLetterMatch() {
  let answer = [];
  for (let i = 0; i < word.length; i++) {
    if (lettersGuessed.includes(word[i])) {
      answer.push(word[i]);
    } else {
      answer.push("_");
    } 
  } 
  hiddenWordEl.textContent = answer.join("");
  renderWin();
  renderLoss();
  renderLettersGuessed();
}

function renderWin() {
  if (word.includes(letterGuessed)) {
    msg.textContent = "YOU GOT IT! If solved, refresh to play again";
    msg.style.visibility = "visible";
  } 
}

function renderLoss() {
  if (word.includes(letterGuessed) === false) {
    mistakesMade++;
    msg.textContent = `"TRY AGAIN! YOU HAVE ${maxMistakes - mistakesMade} TRIES LEFT"`;
    msg.style.visibility = "visible";
    renderHangman();
  }
}

function renderLettersGuessed() {
  lettersLeft.style.visibility = "visible";
  lettersGuessedString = lettersGuessed.toString();
  lettersLeft.textContent = `Letters Used: ${lettersGuessedString}`;
}

function start() {
  shownWordEl.style.visibility = "hidden";
  startButton.remove();
  msg.style.visibility = "hidden";
  mistakesMade = 0;
  lettersGuessed = [];
  letterGuessed;
  hiddenWord = [];
  renderRandomWord();
  resetHangman();
}

function renderHangman() {
  if (mistakesMade === 1) {
    base.style.visibility = "visible"
  } else if (mistakesMade === 2) {
    poleOne.style.visibility = "visible"
  } else if (mistakesMade === 3) {
    poleTwo.style.visibility = "visible"
  } else if (mistakesMade === 4) {
    poleThree.style.visibility = "visible"
  } else if (mistakesMade === 5) {
    head.style.visibility = "visible"
  } else if (mistakesMade === 6) {
    body.style.visibility = "visible"
  } else if (mistakesMade === 7) {
    arms.style.visibility = "visible"
  } else if (mistakesMade === 8) {
    leg1.style.visibility = "visible"
  } else if (mistakesMade === 9) {
    leg2.style.visibility = "visible"
  } if (mistakesMade >= maxMistakes) {
    msg.textContent = "YOU'RE OUT OF TRIES, REFRESH TO PLAY AGAIN";
    msg.style.visibility = "visible";
    shownWordEl.style.visibility = "visible";
    hiddenWordEl.style.visibility = "hidden";
    document.querySelectorAll(".alph").forEach(function(alphbutton) {
      alphbutton.disabled = true;
    });
    return;
  } 
}

function resetHangman() {
  base.style.visibility = "hidden";
  poleOne.style.visibility = "hidden";
  poleTwo.style.visibility = "hidden";
  poleThree.style.visibility = "hidden";
  head.style.visibility = "hidden";
  body.style.visibility = "hidden";
  arms.style.visibility = "hidden";
  leg1.style.visibility = "hidden";
  leg2.style.visibility = "hidden";
}
