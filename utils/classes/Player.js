import Round from './Round.js';

export default class Player extends Round {
  constructor(name) {
    super(1);
    this.name = name;
    this.totalPrize = 0;
  }

  nextLevel() {
    this.totalPrize = this.prize;
    this.nextRound();
    return true;
  }

  response(indAns) {
    return this.question.checkAnswer(indAns);
  }
}
