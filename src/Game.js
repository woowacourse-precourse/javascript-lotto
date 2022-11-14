const { Random } = require('@woowacourse/mission-utils');
const { GAME_RANGE, PRIZES, LOTTO_PRICE, PROFIT_PHRASE, STAT_PHRASE } = require('./config');
const Lotto = require('./Lotto.js');
const Rank = require('./Rank.js');
const { validateBonusNumberNotInLottoNumber } = require('./validate.js');

class Game {
  #lottos = [];
  #winningNumbers = [];
  #bonusNUmber = 0;

  /**
   *
   * @param {number[]} lottoNum
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  constructor(lottoNum, winningNumbers, bonusNumber) {
    this.#lottos = Array.from({ length: lottoNum }, () => this.generateOneLotto());
    this.#winningNumbers = winningNumbers;
    this.#bonusNUmber = bonusNumber;
    validateBonusNumberNotInLottoNumber(bonusNumber, winningNumbers);
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
    const rank = new Rank(this.#winningNumbers, this.#bonusNUmber);
    const ranks = this.#lottos.map((lotto) => rank.checkWinningLottoRank(lotto));

    return ranks.filter((rank) => rank !== Infinity);
  }

  generatePhrase() {
    return this.generateLottoStatPhrase() + this.generateLottoProfit();
  }

  generateLottoProfit() {
    const ranks = this.generateLottoRanks();
    const totalValue = ranks.reduce((acc, rank) => acc + PRIZES[rank].VALUE, 0);
    const profitRate = ((totalValue / (this.#lottos.length * LOTTO_PRICE)) * 100).toFixed(1);

    return PROFIT_PHRASE(profitRate);
  }

  generateLottoStatPhrase() {
    const ranks = this.generateLottoRanks();
    const rankCount = ranks.reduce((acc, rank) => {
      acc[rank] = acc[rank] + 1 || 1;
      return acc;
    }, {});
    return STAT_PHRASE(rankCount);
  }
}

module.exports = Game;
