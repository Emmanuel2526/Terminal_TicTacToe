# TicTacToe
## Overview of The Game
The game of TicTacToe is a game played by two players, it consists of a 3x3 grid which contains 9 cells.
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|_|_|_|
|2|_|_|_|
|1|_|_|_|

Players play using symbols "X" or "O".
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|X|_|_|
|2|_|O|_|
|1|_|_|_|

To win, one must get a 3 vertical/horizontal/diagonal cells to have the same symbol ("X" or "O"), in this
case the symbol will be that of the player who hopes to win.
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|X|_|_|
|2|_|X|O|
|1|O|_|X|

In the above case, player X has won, by filling consecutive diagonal squares with the symbol X.
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|X|_|_|
|2|O|O|O|
|1|_|_|X|

In the above case, player O has won, by filling consecutive horizontal squares with the symbol O.
If all 9 cells are filled and no player has won, then the game results in a draw.
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|X|O|X|
|2|O|O|X|
|1|X|X|O|

In the above case, the game ends in a draw as no player has won and all 9 cells are filled up.

## Game Logic
The game logic is implemented in the `script.js` file. The main functions are:
- `cell(f, r, s, v)`: This function retrieves or stores the value of a cell on the board.
- `block(win_opponent)`: This function blocks the opponent from winning or tries to win the game.
- `draw()`: This function checks if the game has ended in a draw.
- `win()`: This function checks if someone has won the game.
- `ttt(f, r, cn)`: This is the main entry point of the program where all the game logic is executed.

## How to Run the Game
1. Clone the repository: `git clone https://github.com/Osalotioman/TicTacToe.git`
2. Navigate to the project directory: `cd TicTacToe`
3. Open the `index.html` file in your web browser to start the game.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Create a pull request.

## Test Directory
The `test` directory contains various test files and stylesheets used for testing different aspects of the game. It includes:
- `settings_style.css`: Stylesheet for the settings page.
- `settingsv1.html`: First version of the settings page.
- `settingsv2.html`: Second version of the settings page.
- `settingsv3.html`: Third version of the settings page.

## Settings Options
The game includes various settings options that can be customized by the user. These options are available in the settings page, which can be accessed by clicking the "Settings" button in the game. The settings options include:
- Player X plays first: Toggle switch to choose whether Player X plays first.
- Play with: Choose to play with a human or the computer.
- Difficulty Level: Choose the difficulty level when playing with the computer (Easy, Medium, Hard).

## Overview of Repository File Structure:
1. index.html
2. README.md
3. script.js
4. settings.js
5. style.css
6. variables.js
7. LICENSE.txt
8. docs/ComputerAsFirstPlayer.md
9. docs/ComputerAsSecondPlayer.md
10. test/settings_style.css
11. test/settingsv1.html
12. test/settingsv2.html
13. test/settingsv3.html

1. index.html:
  This is the entry point of the program where all game visuals are displayed.
2. README.md:
  This mostly contains information about how the game works, including links to relevant files.
3. script.js:
  For game functionality and implementation of game logic.
4. settings.js:
  Contains code to let users customize the game to their preference.
5. style.css:
  Contains the styling of the game.
6. variables.js:
  Contains game variables that are often used in different parts of the program.
7. LICENSE.txt:
  This contains the license of the repository which dictates how it can/cannot be used.
8. docs/ComputerAsFirstPlayer.md:
  This contains an in-depth explanation of the thought process which led to the creation of an unbeatable computer first player.
9. docs/ComputerAsSecondPlayer.md:
  This contains an in-depth explanation of the thought process which led to the creation of an unbeatable computer second player.
10. test/settings_style.css:
  Stylesheet for the settings page.
11. test/settingsv1.html:
  First version of the settings page.
12. test/settingsv2.html:
  Second version of the settings page.
13. test/settingsv3.html:
  Third version of the settings page.
