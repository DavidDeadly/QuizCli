/* eslint-disable no-alert, no-console, no-use-before-define, no-undef */
import { printCurQuestion, answerChecker } from './index.js';

const round = (player, maxLevel, godMode) => {
  printCurQuestion(player, godMode);

  console.log(
    `
  %cWhat's your answer? %c(use the side numbers, else for exitting)`,
    'color: green',
    'color: gray'
  );
  const answer = Number(prompt(' '));

  return answerChecker(player, answer, maxLevel);
};

export default round;
