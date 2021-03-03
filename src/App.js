
import './App.scss';
import { useState } from 'react'
import { Box, Icon } from '@chakra-ui/react'

function App() {
  const [playerOneSquares, setPlayerOneSquares] = useState([]);
  const [playerTwoSquares, setPlayerTwoSquares] = useState([]);
  const [gameSquares, setGameSquares] = useState([
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    },
    {
      isChecked: false,
      byPlayer: null
    }
  ]);
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

  return (
    <Box className="game-page">
      <Box className="game-container">
        {gameSquares.map((square, squareId) => (
          <Box className="game-square" key={squareId}>
            {square.isFilled && (
              <Box className="check">
                {square.byPlayer === 1 ? ("X") : ("O")}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
