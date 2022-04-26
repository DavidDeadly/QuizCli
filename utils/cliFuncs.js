/* eslint-disable no-alert, no-console, no-use-before-define, node/no-unsupported-features/node-builtins */
import { Player } from './classes/index.js';

const round = (player, name) => {
  printCurQuestion(player);

  console.log(
    `
  %cWhat's your answer? %c(use the side numbers)`,
    'color: green',
    'color: gray'
  );
  const answer = prompt('  ');

  if (!player.response(answer)) {
    console.log(
      `
  %cClose, well done %c${name}!
  %cYour score is: ${player.totalPrize}
    `,
      'color: green',
      'color: violet',
      'color: gold'
    );
    return false;
  }
  return player.nextLevel();
};

export const printCurQuestion = player => {
  const { question, allAnswers } = player.getRandomQuestion();

  console.log(
    `
  %cLevel ${player.level} %cAcc. Prize: ${player.totalPrize}
  %c${question} %creward: ${player.prize}
  `,
    'color: violet',
    'color: gold',
    'color: green',
    'color: gold'
  );
  allAnswers.forEach((a, i) => {
    console.log(`     %c${i} => %c${a}`, 'color: red', 'color: blue');
  });
};

export const welcome = () => {
  const name = prompt("What's your name?");
  console.clear();

  console.log(
    `
  %cWelcome!! ${name}.`,
    'color: green'
  );

  const player = new Player(name);
  return [player, name];
};

export default round;
