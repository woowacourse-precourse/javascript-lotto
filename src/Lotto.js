const { MESSAGES } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validateWinningNumLength(numbers);
    this.validateWinningNumNoDuplicates(numbers);
    this.validateWinningNumBetween1To45(numbers);
    this.validateWinningNumInteger(numbers);
  }

  validateWinningNumLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGES.ERR_WINNUM_NOT_SIX_NUMS);
    }
  }

  validateWinningNumNoDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(MESSAGES.ERR_WINNUM_DUPLICATES);
    }
  }

  validateWinningNumBetween1To45(numbers) {
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error(MESSAGES.ERR_WINNUM_NOT_BETWEEN_ONETOFOURTYFIVE);
      }
    });
  }

  validateWinningNumInteger(numbers) {
    numbers.forEach((num) => {
      if (!Number.isInteger(num)) {
        throw new Error(MESSAGES.ERR_WINNUM_NOT_INT);
      }
    });
  }



  // TODO: 추가 기능 구현
}

module.exports = Lotto;
