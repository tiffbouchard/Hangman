# Hangman 
*A simple browser game made for Project 1 of General Assembly's Software Engineering Immersive Program*

### About the Game
  Hangman is word guessing game traditionally played on paper and pencil. Player one chooses a word, draws the corresponding blanks and player two guesses the word one letter at a time. When a letter is guessed correctly its respective blank is filled int. When a letter is guessed incorrectly a part of the hangman is drawn and player one's chances to guess are reduced. The number of chances to guess the word correctly are determined by the number of hangman parts player two decides on. Player two loses when the hangman drawing is complete meaning they have run out of chances to guess. Otherwise player two has successfully guessed the word before running out of chances to guess. Sometimes, if the word is very difficult, player one can prolong the game by adding additional parts to the hangman drawing allowing player two any given number of additional chances. This browser version accomplishes the same task, but instead the computer will play the role of player one, with less leniency of course. 

### Technologies Used:
- HTML
- CSS
- Javascript

### Screenshots
<img src="/images/screenshot1.png" alt="screenshot1" width="500"/>
<img src="/images/screenshot2.png" alt="screenshot2" width="500"/>

### Instructions
1. Click the start button when you are ready to play
2. A random word will be generated for you to guess
3. Guess the random word letter-by-letter using the built in keyboard (Don't go to crazy though you are only allowed 9 mistakes!)
4. Change the fate of your hangman by guessing the entire word correctly 
5. If you happen to fail in saving your hangman, the answer will appear
6. If you wish to play again after winning or losing, refresh the page  

*Hint: Try testing out vowels first!*

### Getting Started
Click [here](https://tiffbouchard.github.io/Hangman) to play!

### Next Steps
- Include categories for the user to choose from with a wider array of words to guess
- Allow users to choose a level in order to split up harder words from easier words (If a user begins from a lower level it will automatically advance to the next level once the current level is completed) 
- Currently, when a user refreshes the page to play again, there is a chance they will receive the same word they previously completed. Instead of having only one word to guess at a time, have a given number of words to complete within each level. When one word is complete the next word is generated, the same word will never be generated twice within one play. 
- Provide hints for the user if words become too difficult. These hints can take on two forms, one level of hints could be the categorization of the word as a noun, verb, adjective, adverb etc., a second level of hints could be more descriptive. This could be accomplished by creating objects for each word category holding the words and their respective hints and categorizations. These hints should be accessed only when a button is clicked (Allowing a limit of hints can also make the game more interesting). 
- Include audio when a use interacts with different buttons and certain functions are executed (for example, when a new part is added to the hangman, the user clicks a key on the keyboard, the user guesses the letter/word correctly, user advances a level)
- When level are implemented, a score keeper of how many words there are in a level and how many a user has gotten through (Every time a word is successfully guessed, increment the score by 1, when the score is equal to the amount of words in a given level, provide an option to advance to the next level)
-Sync keystrokes to the built in keyboard for an optional user experience
- Generate names/personalities for the hangman each round to create a more fun and novel experience 
- Instead of listing the letters used, change the color/turn off hover function of the given letter on the keyboard for a better user experience. This will make it easier for the user to see the letters they have used without having to scan a list. 
- Improve CSS to be more interesting
- Allow mobile accessibility through media queries 

