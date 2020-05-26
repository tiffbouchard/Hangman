/*----- constants -----*/

const words = ["sunscreen", "tanning", "beach", "swimming"];
const maxMistakes = 9;


/*----- app's state (variables) -----*/

let word 
let lettersGuessed = [];
let mistakesMade;
let wordsCompleted

/*----- cached element references -----*/

let button = document.querySelector('section.alphabet');
let playAgain = document.getElementById('play-again');

/*----- event listeners -----*/


/*----- functions -----*/

init();

function generateRandomWord() {
  const word = words[Math.floor(Math.random() * words.length)];
  
}

function init() {
  document.getElementById('diagram').style.visibility = "hidden";

//reset
//load blank board (no images)
//load random word


}

function renderWinner() {
//
}

function renderNextWord() {

}

function render() {

}