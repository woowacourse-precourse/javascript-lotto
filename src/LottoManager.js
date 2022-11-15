// @ts-check

const Lotto = require('./Lotto');
const { PRIZE, LOTTO } = require('./utils/const');
const { ERROR } = require('./utils/messages');
const Utils = require('./utils/Utils');

class LottoManager {
  /** @type {number[]} */
  #winningNumbers;

  /** @type {number} */
  #bonusNumber;

  /**
   *
   * @param {number[]} winningNumbers
   */
  setWinningNumbers(winningNumbers) {
    const lotto = new Lotto(winningNumbers);
    this.#winningNumbers = lotto.getNumbers();
  }

  /**
   *
   * @returns {number[]}
   */
  getWinningNumbers() {
    return this.#winningNumbers;
  }

  /**
   *
   * @param {number} bonusNumber
   */
  validateBonusNumber(bonusNumber) {
    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR.DUPLICATE);
    }
  }

  /**
   *
   * @param {number} bonusNumber
   */
  setBonusNumber(bonusNumber) {
    this.validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  /**
   *
   * @returns {number}
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }

  /**
   *
   * @param {number} amount
   * @returns {number[][]}
   */
  generateNumbersList(amount) {
    const list = [];

    for (let i = 0; i < amount / LOTTO.PRICE; i++) {
      const randomNumbers = Utils.getRandomNumbers(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.MAX_COUNT
      );

      const lottoNumbers = this.publishLotto(randomNumbers);
      list.push(lottoNumbers);
    }

    return list;
  }

  /**
   *
   * @param {number[]} numbers
   * @returns {number[]}
   */
  publishLotto(numbers) {
    const lotto = new Lotto(numbers);
    return lotto.getNumbers();
  }

  /**
   *
   * @param {number[]} userNumbers
   * @returns {{count: number, isBonusCorrect: boolean}}
   */
  countSame(userNumbers) {
    let count = 0;
    let isBonusCorrect = false;

    userNumbers.forEach((userNumber) => {
      if (this.#winningNumbers.includes(userNumber)) count += 1;
      if (userNumber === this.#bonusNumber) isBonusCorrect = true;
    });

    return { count, isBonusCorrect };
  }

  /**
   *
   * @param {number} count
   * @param {boolean} isBonusCorrect
   * @returns {string}
   */
  getPrize(count, isBonusCorrect) {
    if (isBonusCorrect && count === 5) {
      return 'second';
    }

    const shiftedCount = Math.max(count - 2, 0);

    return PRIZE.LIST_WITHOUT_SECOND[shiftedCount];
  }

  /**
   *
   * @param {number[][]} userNumbersList
   * @returns {{first: number, second: number, third:number, fourth:number, fifth:number}}
   */
  getPrizes(userNumbersList) {
    const prizes = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    userNumbersList.forEach((userNumbers) => {
      const countInfo = this.countSame(userNumbers);
      const { count, isBonusCorrect } = countInfo;
      const prize = this.getPrize(count, isBonusCorrect);

      if (prize !== 'none') prizes[prize] += 1;
    });

    return prizes;
  }

  /**
   *
   * @param {{first: number, second: number, third:number, fourth:number, fifth:number}} statistics
   * @param {number} amount
   * @returns {string}
   */
  calculateRevenue(statistics, amount) {
    let sum = 0;

    Object.entries(statistics).forEach((statistic) => {
      const [type, count] = statistic;
      sum += PRIZE.REWARD[type] * count;
    });

    const revenue = (sum / amount) * 100;

    return revenue.toFixed(1);
  }

  /**
   *
   * @param {number} amount
   * @param {number[][]} userNumbersList
   * @returns {{prizes:{first: number, second: number, third:number, fourth:number, fifth:number}, revenue: string}}
   */
  generateStatistics(amount, userNumbersList) {
    const prizes = this.getPrizes(userNumbersList);
    const revenue = this.calculateRevenue(prizes, amount);

    return { prizes, revenue };
  }
}

module.exports = LottoManager;
