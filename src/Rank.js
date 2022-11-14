const { PRIZE_CONFIG } = require('./config');
const Lotto = require('./Lotto.js');

class Rank {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumberSet = new Set(winningNumbers);
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  /**
   * @param {Lotto} lotto
   * @returns {object} lottoMatchCount, isBonusMatch
   */
  matchLotto(lotto) {
    const lottoMatchCount = lotto.numbers.filter((num) => this.winningNumberSet.has(num)).length;
    const isBonusMatch = lotto.numbers.includes(this.bonusNumber);

    return { lottoMatchCount, isBonusMatch };
  }

  /**
   * @param {Lotto} lotto
   * @returns {number} rank
   */
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
