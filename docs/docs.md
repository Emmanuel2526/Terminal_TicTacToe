# Variables

The idea of using files and ranks came from its use in the game of chess 
to represent the columns and rows of a chess board.

a -> 1st file

b -> 2nd file

c -> 3rd file

t -> turn count : 0 = player1, 1 = player2

tl -> turn list : basically an array which stores the values for the x and o players.
 I choose an array to do this so I wouldn't have to remember who was first or second,
 I'd just take mode 2 of the turn variable (t) and plug it into the array to get the
 x/o value of the current player.

board -> a 2d array (matrix), which is a mathematical model of the graphical board users interact with, it represents the state of the board.

boardn -> a 2d array (matrix), which maps the id's of cells on the board to the board state, $board$.

wl -> win list, the contains a list of all possible ways to win the game, and is used to check if a user has won the game.

ava -> ai versus ai, when set to true, it means I want the computer to play against itself. Apologies for calling it ai though.

# Functions

## cell(f, r, s, v)

### Description of function parameters: 
f -> file

r -> rank

s -> 'r' (retrieve) or 's' (save)

v -> null (when retrieving) or tl[t%2] (when storing)

### Function Details 
The cell function has 2 uses. 
1. To retrieve the value on the board at a specified file(f)
  and rank(r). 
2. To store the value of a player on a specified file(f) and
  rank(r) of the board.

### Examples
Initial board state:
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|X|_|X|
|2|_|O|_|
|1|_|_|_|

Calling cell(b, 2, 'r', null) => 'O'

Initial board state:
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|X|_|X|
|2|_|O|_|
|1|_|_|_|

Calling cell(b, 3, 's', tl[t%2])

Final board state:
|*|a|b|c|
|-:|:-:|:-:|:-|
|3|X|O|X|
|2|_|O|_|
|1|_|_|_|

## block(win_opponent)

### Description of function parameters: 
win_opponent -> boolean value, if true look for a way to win, if false look for a way to block your opponent from winning.

### Function Details
This function was originally made to block opponent from winnig the game, but at some point, I realised that, blocking opponents from winning a game, is no different from blocking yourself from winning, only difference is that you actually win when you try to block yourself from winning. Return values: true or false to indicate success or failure of the program to complete the task.

## draw()

### Function Details
This function checks if the game has ended in a draw and returns a true or false value to indicate yes/no.

## win()

### Function Details
This function checks if someone has won the game and returns a true or false value to indicate yes/no.


## ttt(f, r, cn)

### Description of Parameters
f -> file

r -> rank

cn -> id of the cell clicked on

### Function Details
This is the main entry point of the program where all the magic happens. When the user clicks on a cell, it takes in the coordinates of that cell in 
order to give it a value(current_user_value) if it does not already have one, there after it calls the function for the computer to play. I don't 
why I added the $cn$ parameter as $boardn$ already takes care of that. $cn$ will probably be removed in future updates, and the docs updated accordingly.
