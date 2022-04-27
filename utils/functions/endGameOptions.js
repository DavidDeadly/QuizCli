/* eslint-disable no-undef, no-await-in-loop, no-unused-expressions, no-constant-condition */

const endGameOptions = history => {
  if (history) {
    const seeHistory = confirm(`  Do you wanna see the history?`);
    seeHistory && console.table(history);
  }

  const playAgain = confirm(`  Do you wanna play again?`);

  if (!playAgain) {
    console.log(
      `  
  %cBye...`,
      'color: violet'
    );
  }

  return playAgain;
};

export default endGameOptions;
