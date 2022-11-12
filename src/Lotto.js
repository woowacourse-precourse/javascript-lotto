// @ts-check

const { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER } = require('./const');

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validate(numbers) {
    this.#validateNumbersLength(numbers);
    this.#validateNumbersBound(numbers);
    this.#validateDuplication(numbers);
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validateNumbersBound(numbers) {
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
  #validateDuplication(numbers) {
    const numberSet = new Set(numbers);

    if (numberSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복이 있을 수 없습니다.');
    }
  }

  /**
   *
   * @param {number} bonus
   */
  #validateBonusNumber(bonus) {
    if (this.#numbers.includes(bonus)) {
      throw new Error('[ERROR] 로또 번호에 중복이 있을 수 없습니다.');
    }
  }

  /**
   *
   * @param {number[]} userNumbers
   * @param {number} bonusNumber
   * @returns {{count: number, isBonusCorrect: boolean}}
   */
  #countSame(userNumbers, bonusNumber) {
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
  #getPrize(count, isBonusCorrect) {
    const PRIZE = ['none', 'fifth', 'fourth', 'third', 'first'];
    const shiftedCount = Math.max(count - 2, 0);

    if (isBonusCorrect && count === 5) {
      return 'second';
    }

    return PRIZE[shiftedCount];
  }

  /**
   *
   * @param {number[][]} userNumbersList
   * @param {number} bonusNumber
   * @returns {{first: number, second: number, third:number, fourth:number, fifth:number}}
   */
  getStatistics(userNumbersList, bonusNumber) {
    this.#validateBonusNumber(Number(bonusNumber));
    const statistics = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    userNumbersList.forEach((userNumbers) => {
      const countInfo = this.#countSame(userNumbers, Number(bonusNumber));
      const { count, isBonusCorrect } = countInfo;
      const prize = this.#getPrize(count, isBonusCorrect);

      if (prize !== 'none') statistics[prize] += 1;
    });

    return statistics;
  }
}

module.exports = Lotto;
