
import './App.scss';
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import GameHeadings from './components/GameHeadings';
import TicTacToe from './components/TicTacToe';
import GameButtons from './components/GameButtons';

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

const winningConditions = [
    // Horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [6, 4, 2],
    [0, 4, 8]
  ];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameSquares, setGameSquares] = useState(initialGameSquares);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameStatus, setGameStatus] = useState('');
  const [moveHistory, setMoveHistory] = useState([]);

  function checkIfDraw() {
    // If all squares have been played
    const playedSquares = gameSquares.filter(square => square.isChecked);
    if (playedSquares.length === 9) {
      // and no player has won
      if (!gameComplete) {
        // It is a draw
        setGameComplete(true);
        setGameStatus("It's a draw!");
      }
    }
    
  }
  function checkIfPlayerWon() {
    // Check against the win conditions to see if any has been met. This time complexity can be improved.
    for (let winningArr of winningConditions) {
      // True until proven false
      let hasWon = true;
      for (let winningSquare of winningArr) {
        // console.log("now checking winningArr: " + winningArr.toString());
        // For each set, check if the player has it
        let gameSquare = gameSquares[winningSquare];
        let playerHasSquare = gameSquare.isChecked && gameSquare.byPlayer === currentPlayer;
        if (playerHasSquare) {
          // Don't do anything
        } else {
          // They don't have the set
          hasWon = false;
          break;
        }
      }
      // The player won
      if (hasWon) {
        setGameComplete(true)
        setGameStatus('wins!');
        return true;
      }
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
    if (!gameComplete) {
      // Make sure it hasn't already been played
      if (gameSquares[squareId].isChecked === false) {
        // Create a shallow copy to then set as the new state
        let newGameSquares = [...gameSquares];
        let squareToCheck = newGameSquares[squareId];
        squareToCheck.isChecked = true;

        // Update the move history so we can undo
        let newMoveHistory = [...moveHistory];
        newMoveHistory.push(squareId);
        setMoveHistory(newMoveHistory);

        if (currentPlayer === 1) {
          // Update the square with the player number
          squareToCheck.byPlayer = 1;
          checkIfPlayerWon();
        }
        if (currentPlayer === 2) {
          // Update the square with the player number
          squareToCheck.byPlayer = 2;
          checkIfPlayerWon();
        }
        // Check if this is the last square to be filled
        checkIfDraw();
        // Persist in setState
        setGameSquares(newGameSquares);
        // Switch player for next time
        switchPlayer();
      }
    }
  }

  function handleReset() {
    // Reset the game
    setGameSquares([
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
    ]);
    setGameComplete(false);
    setGameStatus('');
    setMoveHistory([]);
  }

  function handleUndoTurn() {
    // If the game just begun
    if (moveHistory.length === 0) return;
    // Create shallow state copies so as not to edit the state reference
    const newGameSquares = [...gameSquares];
    const newMoveHistory = [...moveHistory];

    // Was the game just won? If so, reset the gameComplete status
    if (gameComplete) {
      setGameComplete(false);
      setGameStatus("");
    }
    // Pop the last move off the history stack
    let lastSquare = newMoveHistory.pop();
    // Reset the square
    newGameSquares[lastSquare].isChecked = false;
    newGameSquares[lastSquare].byPlayer = null;
    // Pass back into state
    setGameSquares(newGameSquares);
    setMoveHistory(newMoveHistory);
    // Switch back player
    switchPlayer();
  }

  return (
    <Box className="game-page">
      <GameHeadings 
        gameStatus={gameStatus} 
        gameComplete={gameComplete} 
        currentPlayer={currentPlayer}
      />
      <TicTacToe 
        handleClick={handleClick} 
        gameSquares={gameSquares}
      />
      <GameButtons 
        handleUndoTurn={handleUndoTurn}
        handleReset={handleReset}
        gameComplete={gameComplete}
        moveHistory={moveHistory}
      />
    </Box>
  );
}

export default App;
