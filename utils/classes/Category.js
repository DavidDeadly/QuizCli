import Question from './Question.js';
import questions from '../db/questions.js';

export default class Category {
  #questions;

  #maxCats = 5;

  #getQuestions() {
    let nextCat = this.level;
    if (nextCat > this.#maxCats) nextCat = 1;
    const ques = questions[nextCat].map(q => new Question(q));
    return ques;
  }

  constructor(level) {
    this.level = level;
    this.#questions = this.#getQuestions(level);
  }

  get questions() {
    return this.#questions;
  }

  set questions(ques) {
    this.#questions = ques;
  }

  nextCategory(maxLevel) {
    if (this.level === maxLevel) return false;
    this.level += 1;
    this.questions = this.#getQuestions();
    return true;
  }
}
