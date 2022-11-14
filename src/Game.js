const { Random } = require('@woowacourse/mission-utils');
const {
  GAME_RANGE,
  PRIZES,
  LOTTO_PRICE,
  PROFIT_PHRASE,
  STAT_PHRASE,
  PURCHASE_PHRASE,
} = require('./config');
const Lotto = require('./Lotto.js');
const Rank = require('./Rank.js');
const { validateBonusNumberNotInLottoNumber } = require('./validate.js');

class Game {
  #lottos = [];
  #winningNumbers = [];
  #bonusNumber = 0;

  /**
   *
   * @param {number[]} lottoNum
   */
  constructor(lottoNum) {
    this.#lottos = Array.from({ length: lottoNum }, () => this.generateOneLotto());
  }

  setWinningBonusNumbers(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers.map(Number);
    this.#bonusNumber = +bonusNumber;
    validateBonusNumberNotInLottoNumber(this.#bonusNumber, this.#winningNumbers);
  }

  /**
   *
   * @returns {Lotto} lotto
   */
  generateOneLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        GAME_RANGE.RANGE_MIN,
        GAME_RANGE.RANGE_MAX,
        GAME_RANGE.NUM_LENGTH,
      ).sort((a, b) => a - b),
    );
  }

  /**
   *
   * @returns {number[]} ranks
   */
  generateLottoRanks() {
    const rank = new Rank(this.#winningNumbers, this.#bonusNumber);
    const ranks = this.#lottos.map((lotto) => rank.checkWinningLottoRank(lotto));

    return ranks.filter((rank) => rank !== Infinity);
  }

  generatePurchasePhrase() {
    const lottos = this.#lottos.map((lotto) => `[${lotto.numbers.join(', ')}]`);
    return PURCHASE_PHRASE(this.#lottos.length) + lottos.join('\n');
  }

  generateStatPhrase() {
    return this.generateMatchPhrase() + this.generateProfitPhrase();
  }

  generateProfitPhrase() {
    const ranks = this.generateLottoRanks();
    const totalValue = ranks.reduce((acc, rank) => acc + PRIZES[rank].VALUE, 0);
    const profitRate = (totalValue / (this.#lottos.length * LOTTO_PRICE)) * 100;

    return PROFIT_PHRASE(
      profitRate.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 1 }),
    );
  }

  generateMatchPhrase() {
    const ranks = this.generateLottoRanks();
    const rankCount = ranks.reduce((acc, rank) => {
      acc[rank] = acc[rank] + 1 || 1;
      return acc;
    }, {});
    return STAT_PHRASE(rankCount);
  }
}

module.exports = Game;
