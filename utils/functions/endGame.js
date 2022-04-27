/* eslint-disable no-console */

const endGame = (player, name) => {
  switch (player.status) {
    case 'coward':
      console.log(
        `
  %cSorry to see go, %c${name}! 
  %cBeing a coward is not a sin xD
  %cHere's your score: ${player.totalPrize}`,
        'color: pink',
        'color: red',
        'color: green',
        'color: gold'
      );
      break;
    case 'loser':
      console.log(
        `
  %cClose, well done %c${name}!
  %cYour score is: ${player.totalPrize}
    `,
        'color: green',
        'color: violet',
        'color: gold'
      );
      break;
    case 'winner':
      console.log(
        `
  %cYOU WON!!, Well done!! %c${name}. 
  %cYour score is: ${player.totalPrize}`,
        'color: pink',
        'color: green',
        'color: gold'
      );
      break;
    default:
      break;
  }

  return player.gameOver();
};

export default endGame;
