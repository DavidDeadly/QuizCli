import Category from './Category.js';

export default class Round extends Category {
  #curQuestion;

  #prize;

  constructor(level) {
    super(level);
    this.#prize = this.#getPrize();
    this.#curQuestion = null;
  }

  get question() {
    return this.#curQuestion;
  }

  get prize() {
    return this.#prize;
  }

  set prize(pr) {
    this.#prize = pr;
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

  nextRound(maxLevel) {
    if (!this.nextCategory(maxLevel)) return false;
    this.prize = this.#getPrize();
    return true;
  }
}
