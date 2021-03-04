import React, { Suspense } from 'react';
import Cross from "../assets/cross.svg";
import Nought from "../assets/nought.svg";


import { Box, Heading, Image} from '@chakra-ui/react';

export default function GameHeadings({ gameComplete, gameStatus, currentPlayer}) {
    return (
      <Box className="game-headings">
        <Heading as="h1" fontSize={["2rem", "3rem"]} m={["0px auto", "10px auto"]}>
          Tic-tac-toe
        </Heading>
        {gameComplete ? (
          <>
            {gameStatus === "wins!" && (
              <Heading
                as="h2"
                 fontSize={["1.4rem", "2rem"]}
                height="5vh"
                className="icon-header"
                d="inline-flex"
              >
                {currentPlayer === 2 ? (
                  <Suspense>
                    <Image className="heading-icon" src={Cross} alt="Cross" />
                  </Suspense>
                ) : (
                  <Suspense>
                    <Image className="heading-icon" src={Nought} alt="Nought" />
                  </Suspense>
                )}{" "}
                wins!
              </Heading>
            )}
            {gameStatus === `It's a draw!` && (
              <Heading as="h2" className="icon-header" d="inline-flex">
                {gameStatus}
              </Heading>
            )}
          </>
        ) : (
          <Heading
            as="h2"
            className="icon-header"
            d="inline-flex"
            alignItems="center"
          >
            {/* This flips if a player wins - the last player won, not the current one */}
            {currentPlayer === 1 ? (
              <Image className="heading-icon" src={Cross} alt="Cross" />
            ) : (
              <Image className="heading-icon" src={Nought} alt="Nought" />
            )}{" "}
            goes next
          </Heading>
        )}
      </Box>
    );
}
 