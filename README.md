**Technology Used:** ![javascript](https://res.cloudinary.com/djmev9ppr/image/upload/v1705071655/icons/js.png) ![html5](https://res.cloudinary.com/djmev9ppr/image/upload/v1705071655/icons/html5.png) ![css3](https://res.cloudinary.com/djmev9ppr/image/upload/v1705071655/icons/css3.png)

**Cool Name Be:** *Guess?*


---
📝**Requirement:**  
- A game for number guessing
- Number should be randomly generated for every `Fresh Game`
- Track what user choosed number previously, and provide hint how `far` and `near` they are from the **target**.

📒**Description:**
A simple game for guessing the target number ranges between `1 to 100` both includes
`10` chances will be given to user within which he/she need to Guess the target if not you will loose the Game.
During each chance hint will be given to predict the right number.

🤖**Technical Discussion:**
- A toogle `gameplay` variable is used to decide whether user should play the game or not
- Following are list of functions encompasses building the game
  
  - validateUserInput:-
    perform some sort of validation such as user guess should ranges between 1 and 100, be a number and etc..

  - validateGuess:-
    this function give directions to user so that they can guess the target
  - displayGuess
  - displayMessage
  - endGame
  - newGame


 


>Executing directly:

$~~~~~~$ run index.html file, default browser with this file loaded will opened.

> Through Vs code while using 'LiveServer' extension

$~~~~~~$ Right click on index.html, click open with live server will server this page at default PORT.
