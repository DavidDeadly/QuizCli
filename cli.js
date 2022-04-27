/* eslint-disable no-undef, no-await-in-loop, no-unused-expressions, no-constant-condition */

import game from './utils/game.js';

async function main() {
  while (true) {
    const history = await game();
    const playAgain = confirm(`  Do you wanna play again?`);

    if (!playAgain) {
      const seeHistory = confirm(`  Do you wanna see the history??`);
      seeHistory && console.table(history);
      break;
    }

    console.clear();
  }
}

if (typeof Deno === 'undefined') {
  console.warn(`
    This program must be executed in the Deno runtime
    Download it here ===> https://deno.land
    It's great, I swear!!
`);
} else {
  console.clear;
  main();
}
