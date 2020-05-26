Constants 
-Words array
    -sunscreen, tanning, beach, swimming, sandcastle

App state variables
-hiddenWord (keep track ), lettersGuessed, mistakesMade,  

Cached elements 
-The individual cells with the alphabet 


Initialize the game 
-Choose random word, display the blank cells for the random word
-Hangman elements are hidden

Render (transfer all state variable to the DOM)
-If letterChoice matches a letter in the word 
-If letterChoice does not match any letters in the word

Win Logic 
-Loop through letters in hidden word, compare with the letterChoice, if the hidden word contains letterChoice, call render(); (calling render will show it on screen)
-If all letters in the hidden word have been matched, end game, call render() to show that you have won on screen 



-use the join function to take the letters out of the boxes and join them together and convert them to lowercase before comparing 
-create lines for all words, but set them to 


Gameplay/App Functionality:
-Loads a random word 
-Blank spaces load (Letters are white), when they are matched, turn on the color 
-Diagram is blank
-User makes a choice 
-When choice matches a letter, show the matched letter, disable that button
-When choice does not match a letter, subtract an attempt, show diagram piece, disable button
-Win: When all letters have been matched, show congrats message, randomly load next word (make sure word that was just completed is not used)
-When attempts reach 0, gameover, show lose message, click button to play again and load new word (initialize)

-if word has been guessed, pop it from the array. 