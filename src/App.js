
import './App.scss';
import { useState } from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

const initialGameSquares = [
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
  {
    isChecked: false,
    byPlayer: null,
  },
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameSquares, setGameSquares] = useState([...initialGameSquares]);

  const [showGameStatus, setShowGameStatus] = useState(false);
  const [gameStatus, setGameStatus] = useState('')
  const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [7, 5, 3],
    [1, 5, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  function checkIfPlayerWon(playerNum) {
    // Check against the win conditions to see if it has been met. This time complexity
    //  can be improved. 
    for (let winningArr of winningConditions) {
      // True until proven false
      let hasWon = true;
      for (let squareNum of gameSquares) {
        // Does a player have each square in a winning set?
        // Correct until proven wrong. 
        if (!winningArr.includes(squareNum)) {
          hasWon = false;
        }
      }
      // The player won
      if (hasWon) return true;
    }
    // The player has not won
    return false;
  }

  function switchPlayer() {
    if (currentPlayer === 1) {
      setCurrentPlayer(2);
    }
    if (currentPlayer === 2) {
      setCurrentPlayer(1);
    }
  }

  function handleClick(squareId) {
    console.log(squareId + ' clicked')
    // Make sure it hasn't already been played
    if (gameSquares[squareId].isChecked === false) {
      // Create a shallow copy to then set as the new state
      let newGameSquares = [...gameSquares];
      let squareToCheck = newGameSquares[squareId];
      squareToCheck.isChecked = true;
      if (currentPlayer === 1) {
        squareToCheck.byPlayer = 1;
        checkIfPlayerWon(1);
      }
      if (currentPlayer === 2) {
        squareToCheck.byPlayer = 2;
        checkIfPlayerWon(2);
      }
      // Persist in setState
      setGameSquares(newGameSquares);
      switchPlayer();
    }
  }

  function handleReset() {
    // Reset the game
    setGameSquares([...initialGameSquares]);
    setShowGameStatus(false);
    setGameStatus('');
  }

  return (
    <Box className="game-page">
      <Box className="game-headings">
        <Heading>Player {currentPlayer}'s turn</Heading>

        {showGameStatus && (
          <>
            <Heading>{gameStatus}</Heading>
            <Button onClick={handleReset}>Play Again</Button>
          </>
        )}
      </Box>

      <Box className="game-container">
        {gameSquares.map((square, squareId) => {
          console.log(square);
          console.log(square.byPlayer === 1);
          return (
            <Box
              className="game-square"
              key={squareId}
              onClick={() => handleClick(squareId)}
            >
              {square.isChecked && (
                <Box className="check">
                  <Text>
                    {square.byPlayer === 1 ? "X" : null}
                    {square.byPlayer === 2 ? "O" : null}
                  </Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default App;
