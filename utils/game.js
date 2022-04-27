/* eslint-disable no-alert, no-console, no-use-before-define, no-undef */
import { welcome, round, endGame } from './functions/index.js';

const MAX_LEVEL = 5;

const game = () => {
  const [player, name] = welcome();

  while (player.level < MAX_LEVEL + 1) {
    if (!round(player, MAX_LEVEL)) break;
  }

  return endGame(player, name);
};

export default game;
