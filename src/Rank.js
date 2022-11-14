const { PRIZE_CONFIG } = require('./config');

class Rank {
  constructor(lotto, bonusNumber) {
    this.lottoSet = new Set(lotto);
    this.lotto = lotto;
    this.bonusNumber = bonusNumber;
  }

  matchLotto(target) {
    const targetMatchCount = target.filter((num) => this.lottoSet.has(num)).length;
    const isBonusMatch = target.includes(this.bonusNumber);

    return { targetMatchCount, isBonusMatch };
  }

  checkWinningLottoRank(target) {
    const { targetMatchCount, isBonusMatch } = this.matchLotto(target);
    const matchingRanks = [];

    Object.entries(PRIZE_CONFIG).forEach(([prizeRank, prize]) => {
      if (targetMatchCount === prize.COUNT && prize.BONUS === true && isBonusMatch === true) {
        matchingRanks.push(prizeRank);
      } else if (targetMatchCount === prize.COUNT && prize.BONUS === false) {
        matchingRanks.push(prizeRank);
      } else {
        matchingRanks.push(Infinity);
      }
    });

    return Math.min(...matchingRanks);
  }
}

module.exports = Rank;
