import React from 'react';
import Cross from "../assets/cross.svg";
import Nought from "../assets/nought.svg";

import { Box, Heading, Image} from '@chakra-ui/react';

export default function GameHeadings({ gameComplete, gameStatus, currentPlayer}) {
    return (
      <Box className="game-headings">
        <Heading as="h1" m="10px auto" fontSize="2em">
          Tic Tac Toe
        </Heading>
        {gameComplete ? (
          <Heading 
            as="h2" 
            className="icon-header" 
            d="inline-flex"
          >
            {currentPlayer === 2 ? (
              <Image className="heading-icon" src={Cross} />
            ) : (
              <Image className="heading-icon" src={Nought} />
            )}{" "}
            wins!
          </Heading>
        ) : (
          <Heading
            as="h2"
            class="icon-header"
            d="inline-flex"
            alignItems="center"
          >
            {/* This flips if a player wins - the last player won, not the current one */}
            {currentPlayer === 1 ? (
              <Image className="heading-icon" src={Cross} />
            ) : (
              <Image className="heading-icon" src={Nought} />
            )}{" "}
            goes next
          </Heading>
        )}
      </Box>
    );
}
 