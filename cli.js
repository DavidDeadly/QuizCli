/* eslint-disable no-alert, no-console, no-use-before-define, node/no-unsupported-features/node-builtins, no-undef */

import round, { welcome } from './utils/cliFuncs.js';

function main() {
  const [player, name] = welcome();

  while (player.level <= 5) {
    if (!round(player, name)) break;
  }

  if (player.level > 5) {
    console.log(`%cYOU WON!!, Well done!!${name}. %cYour score is: ${player.totalPrize}`, 'color: pink', 'color: gold');
  }
}

if (typeof Deno !== 'undefined') main();
else
  console.error(`
    This program must be executed in the Deno runtime
    Download here 👉👉👉👉 https://deno.land
    It's great, I swear!!
`);
