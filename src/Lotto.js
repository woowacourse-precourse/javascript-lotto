/* eslint-disable class-methods-use-this */
const utils = require('./utils/utils');
const ERROR_MESSAGE = require('./constants/errorMessages');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const setOfNumbers = new Set(numbers);

    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.LENGTH_ERROR);

    if ([...setOfNumbers].length !== 6) throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
  }

  getCount(lotto) {
    return this.#numbers.reduce((accCount, number) => {
      if (lotto.includes(number)) return accCount + 1;

      return accCount;
    }, 0);
  }

  getStats(lottos, bonusNumber) {
    const initStats = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    const stats = lottos.reduce((accStats, lotto) => {
      const accumulateStats = accStats;
      const correctCount = this.getCount(lotto);
      const key = utils.getKey(correctCount, lotto, bonusNumber);

      if (key === -1) return accumulateStats;

      accumulateStats[key] += 1;

      return accumulateStats;
    }, initStats);

    return stats;
  }
}

module.exports = Lotto;
