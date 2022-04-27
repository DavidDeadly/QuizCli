/* eslint-disable import/no-unresolved, no-undef, no-unused-expressions */
import * as fs from 'https://deno.land/std@0.136.0/fs/mod.ts';
import Round from './Round.js';

export default class Player extends Round {
  #type;

  static async readHistory() {
    const history = await fs
      // reads history file, if it doesn't exists it's created
      .ensureFile('./utils/db/history.json')
      .then(() => Deno.readTextFile('./utils/db/history.json'))
      .catch(er => new Error("Couldn't read the history file: ", er));
    // parse the file
    return history ? JSON.parse(history) : [];
  }

  #saveResults(history) {
    // stack structure
    history.unshift(this);
    // writes the file
    return Deno.writeTextFile('./utils/db/history.json', JSON.stringify(history, null, '\t'), {
      create: true,
    })
      .then(() => Player.readHistory())
      .catch(er => new Error("Couldn't write the history D:", er));
  }

  constructor(name) {
    if (!name) throw new Error('Your need a Name!!');
    super(1);
    this.name = name;
    this.totalPrize = 0;
    this.type = null;
    this.gameOver = async () => {
      const history = await Player.readHistory() //
        .then(h => this.#saveResults(h));
      return history;
    };
  }

  get status() {
    return this.type;
  }

  set status(newSt) {
    this.type = newSt;
  }

  nextLevel(maxLevel) {
    this.totalPrize = this.prize;
    if (!this.nextRound(maxLevel)) {
      this.type = 'winner';
      return false;
    }
    return true;
  }

  response(indAns) {
    return this.question.checkAnswer(indAns);
  }
}
