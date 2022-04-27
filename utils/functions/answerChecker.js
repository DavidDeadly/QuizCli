const posRes = [0, 1, 2, 3];

const answerChecker = (player, ans, maxLevel) => {
  if (!posRes.includes(ans)) {
    player.status = 'coward';
    return false;
  }

  if (!player.response(ans)) {
    player.status = 'loser';
    return false;
  }

  return player.nextLevel(maxLevel);
};

export default answerChecker;
