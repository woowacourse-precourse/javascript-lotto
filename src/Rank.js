const { PRIZE_CONFIG } = require('./config');

class Rank {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumberSet = new Set(winningNumbers);
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  matchLotto(lotto) {
    const lottoMatchCount = lotto.filter((num) => this.winningNumberSet.has(num)).length;
    const isBonusMatch = lotto.includes(this.bonusNumber);

    return { lottoMatchCount, isBonusMatch };
  }

  checkWinningLottoRank(lotto) {
    const { lottoMatchCount, isBonusMatch } = this.matchLotto(lotto);
    const matchingRanks = [];

    Object.entries(PRIZE_CONFIG).forEach(([prizeRank, prize]) => {
      if (lottoMatchCount === prize.COUNT && prize.BONUS === true && isBonusMatch === true) {
        matchingRanks.push(prizeRank);
      } else if (lottoMatchCount === prize.COUNT && prize.BONUS === false) {
        matchingRanks.push(prizeRank);
      } else {
        matchingRanks.push(Infinity);
      }
    });

    return Math.min(...matchingRanks);
  }
}

module.exports = Rank;
