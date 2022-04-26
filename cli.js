/* eslint-disable no-alert, no-console, no-use-before-define, node/no-unsupported-features/node-builtins */

import { Player } from './utils/classes/index.js';
import round from './utils/cliFuncs.js';

const name = prompt("What's your name?");
console.clear();

console.log(`Welcome!! ${name}`);

const player = new Player(name);

while (player.level <= 5) {
  if (!round(player)) break;
}

if (player.level > 5) {
  console.log(`%cYOU WON!!, Well done!!${name}. %cYour score is: ${player.totalPrize}`, 'color: pink', 'color: gold');
}
