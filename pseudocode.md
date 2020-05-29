Initialize the game 
- Choose random word, display the blank cells for the random word
- Hangman elements are hidden

Handle Click
- If event target is not the keyboard then return
- Set letterGuessed to the innerHTML of event target
-Push letterGuessed to the array lettersGuessed
-Call renderLetterMatch when keyboard button is clicked
-If the lettersGuessed array includes the letterGuessed, disable that button so it can’t be guessed again 

Render Random Word
- Set word to be a random word from the words array, set as upper case
- Set the shownWordEl to the current word so that it can be used later to display the final answer if user does not complete the word
- Loop through the current word and for each letter create a new array called hiddenWord with underscore in place that show when game is started 

Render Letter Match 
- Create an empty array for the answers to be kept in 
- Loop through the current word and if the word includes the letterGuessed add it to the answer array 
- Else all the other blank spaces should be set to underscores (because they don’t contain a letter yet)
- Set the textContent of hiddenWordEl to the answer array joined with spaces 
- Call the win and loss functions and letter guessed function

Render Win/Loss
- If the word includes the letter guessed then display a congrats message 
- If the includes statement returns false then add one to mistakes made, show loss message and render the hangman function (to show the body parts)

Render Letters Guessed 
- Turn on the visibility for the lettersLeft element 
- Turn the lettersGuessed array into a string
- Add this string to the text of the lettersLeft element 

Init function 
- Runs when play again button is clicked, resets all variables and hides lettersLeft 
- Calls renderRandomWord and resetHangman functions

Start function
- Same as init but runs when start button is clicked, removing the start button and the visibility of the initial welcome message 
- Calls renderRandomWord and resetHangman functions

Render Hangman 
- Makes the parts of the hangman visible based on the mistakes made
- When the mistakes made are greater than or equal to maxMistakes, show message, the full answer and disable all keyboard buttons 

Reset Hangman 
- Sets all hangman elements to hidden

