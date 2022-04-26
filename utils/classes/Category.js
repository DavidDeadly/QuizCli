import Question from './Question.js';
import questions from '../db/questions.js';

export default class Category {
  #questions() {
    const ques = questions[this.level].map(q => new Question(q));
    return ques;
  }

  constructor(level) {
    this.level = level;
    this.questions = this.#questions(level);
  }

  nextCategory() {
    this.level += 1;
    if (this.level > 5) return;
    this.questions = this.#questions();
  }
}

// static #parseDiff(level) {
//   if (level < 1 || level > 5) throw new Error('Level Must be a number between 1 and 5');
//   const difficulty = level === 1 || level === 2 ? 'easy' : level === 3 || level === 4 ? 'medium' : 'hard';
//   return difficulty;
// }

// async #fetchQuestions(level) {
//   const diff = this.#parseDiff(level);
//   await fetch(`https://the-trivia-api.com/api/questions?limit=5&difficulty=${diff}`)
//     .then(r => r.json())
//     .then(qs => {
//       const qqs = qs.map(q => {
//         q.difficulty = level;
//         const ques = new Question(q);
//         ques.answers = q.correctAnswer;
//         return ques;
//       });
//       this.questions = qqs;
//     });
// }
