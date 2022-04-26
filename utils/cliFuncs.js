/* eslint-disable no-alert, no-console, no-use-before-define, node/no-unsupported-features/node-builtins */
const round = (player, name) => {
  console.log(printCurQuestion(player));

  console.log(`%cWhat's your answer? %c(use the side number)`, 'color: green', 'color: gray');
  const answer = prompt('');

  if (!player.response(answer)) {
    console.log(`%cClose, well done!!${name}. %cYour score is: ${player.totalPrize}`, 'color: green', 'color: gold');
    return false;
  }
  return player.nextLevel();
};

const printCurQuestion = player => {
  const { question, allAnswers, difficulty } = player.getRandomQuestion();

  console.log(`%cLevel ${player.level} %cAcc. Prize: ${player.totalPrize}`, 'color: violet', 'color: gold');
  console.log(`%c${question} %creward: ${player.prize}`, 'color: green', 'color: gold');
  allAnswers.forEach((a, i) => {
    console.log(`%c${i} _ %c${a}`, 'color: red', 'color: blue');
  });

  return difficulty;
};

export default round;
