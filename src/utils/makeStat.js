const makeStat = (lottos, win, bonusWin) => {
  const stats = [];
  const bonusHit = [];

  for (let i = 0; i < lottos.length; i++) {
    stats.push(lottos[i].filter((x) => win.includes(x)).length);
  }

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i].filter((x) => bonusWin.includes(x)).length) {
      stats[i]++;
      bonusHit.push(true);
    }
    if (!lottos[i].filter((x) => bonusWin.includes(x)).length) {
      bonusHit.push(false);
    }
  }

  return { stats, bonusHit };
};

module.exports = makeStat;
