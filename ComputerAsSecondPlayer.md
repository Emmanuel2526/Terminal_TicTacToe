# Explanation of the code for the computer going as second player
## Overview
As we all might have already guessed or known, TicTacToe is a game of fixed probabilities, meaning every possible move that can be made in any possible sequence can
be mapped out. What makes this even more interesting is that some board states are just a 90 degree, 180 degree, or 270 degree rotation of another board state, this
just makes the job of mapping out all possible sequences that lead to a draw way easier.
The method I use below will come up with an algorithm for the second player (computer) to either always win/draw the first player depending on how optimally the 
first player plays.

## Underlying Ideas
I have analyzed board states from the very begining to ensure that the computer plays optimally, by assuming it is playing with an optimal first player.
The idea that I have used for both the computer going as first and the computer going as second is **Control**.
Yes, control. You control the game if any move you make leads the other player to make a move, in reaction to the move you had previously made.
The best position that gives the most control is the centre square **b2**. Hence I begin writing down the method I used in making this computer player having
control in ming.

## Methods
### Game at t = 0:
Obviously this is not your move, but what the first player does here determines how you will react. 
Only two things are of concern here, which are: 
1. First player occupies middle square **b2**.
2. First player does not occupy middle square **b2**.
<br>
#### First Player Occupuies Middle Square **b2**:
  If the first player occupies the middle square (centre of control), your best bet for survival is a corner square.
