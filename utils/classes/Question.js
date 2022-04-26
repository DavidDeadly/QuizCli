export default class Question {
  constructor({ id, category, difficulty, question, allAnswers, corrAnsIndex }) {
    this.id = id;
    this.question = question;
    this.category = category;
    this.difficulty = difficulty;
    this.allAnswers = allAnswers;
    this.corrAnsIndex = corrAnsIndex;
  }

  checkAnswer(indAns) {
    return this.allAnswers[this.corrAnsIndex] === this.allAnswers[indAns];
  }
}

// get correctAnswer() {
//   return this.#correctAnswer;
// }

// set answers(correctAnswer) {
//   const answers = [...this.#incorrectAnswers];
//   const ranIndex = Math.floor(Math.random() * this.#incorrectAnswers.length);
//   const answerInRanIndex = answers[ranIndex];
//   answers[ranIndex] = correctAnswer;
//   answers.push(answerInRanIndex);
//   this.allAnswers = answers;
//   this.corrAnsIndex = ranIndex;
// }
