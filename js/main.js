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
let currentWords = [];

/*----- cached element references -----*/

let buttons = document.getElementById("keyboard");
let playAgain = document.getElementById("play-again");
let playAgainBtn = document.querySelector("#play-again button");
playAgainBtn.disabled = true;
let hangman = document.getElementById("diagram");
let wordToGuess = document.getElementById("word-to-guess");
let hiddenWordEl = document.getElementById("hidden-word");
let startButton = document.getElementById("start");
let msg = document.getElementById("msg");


//hangman
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
playAgain.addEventListener("click", init);

/*----- functions -----*/

//Have full hangman drawing visible, no secret word visible
//show Message: READY TO PLAY? 
//have button to click that says: START!
//START button will remove the START button and the message and run the init() function;

function handleClick(evt) {
  if (evt.target.id === "keyboard") {
    return;
  }
  letterGuessed = evt.target.innerHTML;
  lettersGuessed.push(letterGuessed);
  if (lettersGuessed.includes(letterGuessed)) {
    evt.target.disabled = true;
  }
  renderLetterMatch();
}

function renderRandomWord() {
  word = words[Math.floor(Math.random() * words.length)];
  word = word.toUpperCase();
  currentWords.push(word);
  //never render the same word, if all words are used up 
  wordSplit = word.split("");
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
  // showLetter = wordSplit.includes(letterGuessed);
  if (wordSplit.includes(letterGuessed) === true) {
    msg.textContent = "YOU GOT IT!";
    msg.style.visibility = "visible";
  } else if (wordSplit.includes(letterGuessed) === false) {
    msg.textContent = "TRY AGAIN!";
    msg.style.visibility = "visible";
    mistakesMade++;
  }if (mistakesMade === 1) {
    base.style.visibility = "visible"
  } if (mistakesMade === 2) {
    poleOne.style.visibility = "visible"
  } if (mistakesMade === 3) {
    poleTwo.style.visibility = "visible"
  } if (mistakesMade === 4) {
    poleThree.style.visibility = "visible"
  } if (mistakesMade === 5) {
    head.style.visibility = "visible"
  } if (mistakesMade === 6) {
    body.style.visibility = "visible"
  } if (mistakesMade === 7) {
    arms.style.visibility = "visible"
  } if (mistakesMade === 8) {
    leg1.style.visibility = "visible"
  } if (mistakesMade === 9) {
    leg2.style.visibility = "visible"
  }
} 


// if (mistakesMade = maxMistakes) {
//   msg.textContent = "YOU'RE OUT OF TRIES";
//   msg.style.visibility = "visible";
//where to put this^^^
  
  //display only those element from wordSplit and show CONGRATS msg (use split to )
  //if it does not contain, mistakesMade++ and show TRY AGAIN msg
  //if mistakesMade => maxMistakes end game and show BETTER LUCK NEXT TIME msg 
  //if all letters are matched, and word is completed, push it to wordsCompleted
  //
  //if word is successfully matched add to wordsCompleted

//how to not repeat self everytime

function init() {
  renderRandomWord();
  hangman.style.visibility = "hidden";
  base.style.visibility = "hidden"
  poleOne.style.visibility = "hidden"
  poleTwo.style.visibility = "hidden"
  poleThree.style.visibility = "hidden"
  head.style.visibility = "hidden"
  body.style.visibility = "hidden"
  arms.style.visibility = "hidden"
  leg1.style.visibility = "hidden"
  leg2.style.visibility = "hidden"
  mistakesMade = 0;
  wordsCompleted = [];
  lettersGuessed = [];
  letterGuessed;
  hiddenWord = [];
}
//find a way to not repeat hidden everytime 

function start() {
  renderRandomWord();
  playAgainBtn.disabled = false;
  hangman.style.visibility = "hidden";
  startButton.remove();
  msg.style.visibility = "hidden";
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


//when start button is pressed, make transition more smooth, take like 2 seconds to dissapear

//add theme somewhere on the page