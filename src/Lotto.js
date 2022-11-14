// @ts-check

const { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER } = require('./const');

const PRIZE_WITHOUT_SECOND = ['none', 'fifth', 'fourth', 'third', 'first'];
const PRIZE_REWARD = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  /**
   *
   * @param {number[]} numbers
   */
  validate(numbers) {
    this.validateNumbersLength(numbers);
    this.validateNumbersBound(numbers);
    this.validateDuplication(numbers);
  }

  /**
   *
   * @param {number[]} numbers
   */
  validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  /**
   *
   * @param {number[]} numbers
   */
  validateNumbersBound(numbers) {
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < LOTTO_MIN_NUMBER ||
        number > LOTTO_MAX_NUMBER
      ) {
        throw new Error('[ERROR] 로또 번호는 1이상 45 이하의 정수여야 합니다.');
      }
    });
  }

  /**
   *
   * @param {number[]} numbers
   */
  validateDuplication(numbers) {
    const numberSet = new Set(numbers);

    if (numberSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복이 있을 수 없습니다.');
    }
  }

  /**
   *
   * @param {number[]} userNumbers
   * @param {number} bonusNumber
   * @returns {{count: number, isBonusCorrect: boolean}}
   */
  countSame(userNumbers, bonusNumber) {
    let count = 0;
    let isBonusCorrect = false;

    userNumbers.forEach((userNumber) => {
      if (this.#numbers.includes(userNumber)) count += 1;
      if (userNumber === bonusNumber) isBonusCorrect = true;
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
   * @param {number} bonusNumber
   * @returns {{first: number, second: number, third:number, fourth:number, fifth:number}}
   */
  getStatistics(userNumbersList, bonusNumber) {
    const statistics = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    userNumbersList.forEach((userNumbers) => {
      const countInfo = this.countSame(userNumbers, Number(bonusNumber));
      const { count, isBonusCorrect } = countInfo;
      const prize = this.getPrize(count, isBonusCorrect);

      if (prize !== 'none') statistics[prize] += 1;
    });

    return statistics;
  }

  /**
   *
   * @param {{first: number, second: number, third:number, fourth:number, fifth:number}} statistics
   * @param {number} amount
   * @returns
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

module.exports = Lotto;
