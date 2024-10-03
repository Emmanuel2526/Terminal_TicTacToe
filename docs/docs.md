# Variables


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
|*|1|2|3|
|-:|:-:|:-:|:-|
|c|X|_|X|
|b|_|O|_|
|a|_|_|_|
Calling cell(b, 2, 'r', null) => 'O'

Initial board state:
|*|1|2|3|
|-:|:-:|:-:|:-|
|c|X|_|X|
|b|_|O|_|
|a|_|_|_|
Calling cell(b, 3, 's', tl[t%2])
Final board state:
|*|1|2|3|
|-:|:-:|:-:|:-|
|c|X|O|X|
|b|_|O|_|
|a|_|_|_|