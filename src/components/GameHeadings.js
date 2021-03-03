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
            <Heading as="h2" d="inline-flex">
            {gameStatus}
            </Heading>
        ) : (
            <Heading as="h2" class="icon-header" d="inline-flex" alignItems="center">
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
 