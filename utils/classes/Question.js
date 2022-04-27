export default class Question {
  constructor({ category, difficulty, question, allAnswers, corrAnsIndex }) {
    this.question = question;
    this.category = category;
    this.difficulty = difficulty;
    this.allAnswers = allAnswers;
    this.corrAnsIndex = corrAnsIndex;
    this.checkAnswer = indAns => this.allAnswers[this.corrAnsIndex] === this.allAnswers[indAns];
  }
}
