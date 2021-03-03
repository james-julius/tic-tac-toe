import { Box, Button } from '@chakra-ui/react';

export default function GameButtons ({ handleReset, handleUndoTurn, gameComplete, moveHistory }) {
    return (
        <Box className="game-buttons">
            {gameComplete && (
                <Button className="game-button" onClick={handleReset}>
                Play Again
                </Button>
            )}
            {moveHistory.length !== 0 && (
                <Button className="game-button" onClick={handleUndoTurn}>
                Undo last turn?
                </Button>
            )}
        </Box>
    );
}