class WinStats {
  statValue;

  constructor(generatedLottos, lottoNumbers, bonusNumber) {
    this.makeStats(generatedLottos, lottoNumbers, bonusNumber);
  }

  makeStats(generatedLottos, lottoNumbers, bonusNumber) {
    let stats = [];
    for (let i = 0; i < generatedLottos.length; i++) {
      const set = new Set(generatedLottos[i].concat(lottoNumbers));
      stats.push(set);
    }
    this.prize(stats, bonusNumber);
  }

  prize(stats, bonusNumber) {
    let statValue = [0, 0, 0, 0, 0];
    for (let i = 0; i < stats.length; i++) {
      switch (stats[i].size) {
        case 9:
          statValue[0]++;
          break;
        case 8:
          statValue[1]++;
          break;
        case 7:
          stats[i].has(bonusNumber) ? statValue[3]++ : statValue[2]++;
          break;
        case 6:
          statValue[4]++;
      }
    }
    this.statValue = statValue;
  }
}

module.exports = WinStats;
