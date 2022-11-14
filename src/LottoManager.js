// @ts-check

const Lotto = require('./Lotto');

const PRIZE_WITHOUT_SECOND = ['none', 'fifth', 'fourth', 'third', 'first'];
const PRIZE_REWARD = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

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
      throw new Error('[ERROR] 로또 번호에 중복이 있을 수 없습니다.');
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

    return PRIZE_WITHOUT_SECOND[shiftedCount];
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
      sum += PRIZE_REWARD[type] * count;
    });

    const revenue = (sum / amount) * 100;

    return revenue.toFixed(1);
  }
}

module.exports = LottoManager;
