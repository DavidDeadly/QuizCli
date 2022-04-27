/* eslint-disable no-console */

const printCurQuestion = player => {
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

export default printCurQuestion;
