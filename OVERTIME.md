# This is a tic tac toe game created as part of an interview for Alphaflow

It is created with React and uses Chakra-UI as well as icons from FlatIcon for the noughts and cross. 

In the extra overtime half-hour alloted, I applied some improvements to the code-base that make it much cleaner, extracting different elements of the app to make the App more in line with Stateful and Stateless patterns. 


I also noticed I had a bug showing the wrong player had won each game (as it showed current player, but that switched when the game won) - this has been fixed. Later noticed that re-factors here introduced a bug showing player winning upon draw. Re-wrote code to fix this, as it is very important to me to ship bug-free code.

I still have improvements and optimisations that could be made to the codebase including: 
- using Suspense to show images when fully loaded, instead of flickering slightly when being removed and added to the DOM.
- Styling optimisations 
- Performance optimisations could be made with useCallback and useMemo
- Feature additions: 
    - Number of games won for each player to benefit gamification and product use.
    - The ability to assign player names to each nought and cross

But sadly, they will not be complete in this session. Another time :)