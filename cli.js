/* eslint-disable no-undef, no-await-in-loop, no-unused-expressions, no-constant-condition */

import game from './utils/game.js';
import { endGameOptions } from './utils/functions/index.js';

async function main() {
  const godMode = Deno.args.includes('--god');

  while (true) {
    let history;
    try {
      history = await game(godMode);
    } catch (error) {
      console.error('Somethin went wrong: ', error);
    }

    if (!endGameOptions(history)) break;
  }
}

if (typeof Deno === 'undefined') {
  console.warn(`
    This program must be executed in the Deno runtime
    Download it here ===> https://deno.land
    It's great, I swear!!
`);
} else main();
