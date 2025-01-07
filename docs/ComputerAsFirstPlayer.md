# Explanation of the code for the computer going as first player

## Overview
The game of TicTacToe is a game of fixed probabilities, meaning every possible move that can be made in any possible sequence can be mapped out. The method used below will come up with an algorithm for the first player (computer) to either always win or draw depending on how optimally the second player plays.

## Underlying Ideas
The idea used for the computer going as the first player is **Control**. Control means that any move you make leads the other player to make a move in reaction to the move you had previously made. The best position that gives the most control is the center square **b2**. Hence, the computer always starts by occupying the center square.

## Methods
### Game at t = 0:
This is the computer's first move. The computer always occupies the center square **b2**.

### Game at t = 2:
The computer's second move depends on the opponent's first move. The possible scenarios are:
1. Opponent occupies a corner square.
2. Opponent occupies a non-corner square.

#### Opponent occupies a corner square:
The computer will occupy an adjacent non-corner square to maintain control.

#### Opponent occupies a non-corner square:
The computer will occupy a corner square to maintain control.

### Game at t = 4:
The computer's third move depends on the board state. The computer will try to win if possible, otherwise, it will block the opponent from winning.

### Subsequent Moves:
The computer will continue to try to win if possible, otherwise, it will block the opponent from winning. If neither is possible, the computer will occupy any available square.

# Explanation of the code for the computer going as second player

## Overview
The method used below will come up with an algorithm for the second player (computer) to either always win or draw depending on how optimally the first player plays.

## Underlying Ideas
The idea used for the computer going as the second player is also **Control**. The computer aims to control the game by reacting optimally to the first player's moves.

## Methods
### Game at t = 1:
This is the opponent's first move. The computer's response depends on the opponent's move. The possible scenarios are:
1. Opponent occupies the center square **b2**.
2. Opponent does not occupy the center square **b2**.

#### Opponent occupies the center square **b2**:
The computer will occupy a corner square to maintain control.

#### Opponent does not occupy the center square **b2**:
The computer will occupy the center square **b2** to gain control.

### Game at t = 3:
The computer's second move depends on the board state. The computer will try to block the opponent from winning or occupy a strategic square to maintain control.

### Subsequent Moves:
The computer will continue to try to win if possible, otherwise, it will block the opponent from winning. If neither is possible, the computer will occupy any available square.
