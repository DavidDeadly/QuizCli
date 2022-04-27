/* eslint-disable no-console, no-alert, no-undef */

import { Player } from '../classes/index.js';

const welcome = () => {
  const name = prompt(`  What's your name?`);
  console.clear();

  console.log(
    `
  %cWelcome!! ${name}.`,
    'color: green'
  );

  const player = new Player(name);
  return [player, name];
};

export default welcome;
