/* eslint-disable no-console, no-alert, no-undef */

import { Player } from '../classes/index.js';

const welcome = () => {
  console.clear();
  const name = prompt(`  What's your name?`);
  const player = new Player(name);
  console.clear();

  console.log(
    `
  %cWelcome!! ${name}.`,
    'color: green'
  );

  return [player, name];
};

export default welcome;
