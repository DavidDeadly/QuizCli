import Category from './Category.js';

export default class Round extends Category {
  #curQuestion;

  constructor(level) {
    super(level);
    this.prize = this.#getPrize();
    this.#curQuestion = null;
  }

  get question() {
    return this.#curQuestion;
  }

  #getPrize() {
    return this.level * 1000;
  }

  getRandomQuestion() {
    const randIndex = Math.floor(Math.random() * this.questions.length);
    const question = this.questions[randIndex];
    this.#curQuestion = question;
    return question;
  }

  nextRound() {
    this.nextCategory();
    this.prize = this.#getPrize();
  }
}
