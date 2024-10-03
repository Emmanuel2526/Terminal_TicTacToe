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

# Functions

## cell(f, r, s, v)

### Description of function parameters: 
f -> file

r -> rank

s -> 'r' (retrieve) or 's' (save)

v -> null (when retrieving) or tl[t%2] (when storing)

### The cell function has 2 uses. 
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