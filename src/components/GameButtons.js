import { Box, Button, Image } from '@chakra-ui/react';
import Cross from "../assets/cross.svg";
import Nought from "../assets/nought.svg";

export default function GameButtons ({ handleReset, handleUndoTurn, gameComplete, moveHistory, currentPlayer }) {
    return (
      <Box className="game-buttons">
        {moveHistory.length !== 0 && (
          <Button className="game-button" onClick={handleUndoTurn}>
            Undo move by{" "}
            {currentPlayer === 2 ? (
                <Image 
                    className="button-icon"
                    src={Cross} 
                    alt="Cross"
                />
             ) : (
                <Image 
                    className="button-icon"
                    src={Nought}
                    alt="Nought"
                />
             )}
          </Button>
        )}
        {gameComplete && (
          <Button className="game-button" onClick={handleReset}>
            New Game
          </Button>
        )}
      </Box>
    );
}