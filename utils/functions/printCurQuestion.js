/* eslint-disable no-console */

const printCurQuestion = (player, godMode) => {
  const { question, allAnswers, corrAnsIndex } = player.getRandomQuestion();

  console.log(
    `
  %cLevel ${player.level} %cAcc. Prize: ${player.totalPrize} ${godMode ? `||  Answer:  ${corrAnsIndex}` : ''}
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
