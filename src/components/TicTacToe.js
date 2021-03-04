import { Box, Image } from '@chakra-ui/react';
import Cross from '../assets/cross.svg';
import Nought from '../assets/nought.svg';

export default function TicTacToe({ handleClick, gameSquares}) {
    return (
      <Box className="game-container">
        {gameSquares.map((square, squareId) => {
          return (
            <Box
              className="game-square"
              key={squareId}
              onClick={() => handleClick(squareId)}
            >
              {square.isChecked && (
                <>
                  {square.byPlayer === 1 ? (
                    <Image className="nought-or-cross" src={Cross} alt="Cross" />
                  ) : null}
                  {square.byPlayer === 2 ? (
                    <Image className="nought-or-cross" src={Nought} alt="Nought" />
                  ) : null}
                </>
              )}
            </Box>
          );
        })}
      </Box>
    );
}