const LOTTO = require('./consts/Lotto');
const { ERROR } = require('./consts/Message');
const Exception = require('./Exception');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.handleLottoException(numbers);
    this.#numbers = numbers;
  }

  handleLottoException(numbers) {
    const {
      LOTTO_NUMBER: { DIGITS, RANGE, UNIQUE },
    } = ERROR;

    switch (false) {
      case this.isCorrectNumberOfDigits(numbers):
        throw Exception.error(DIGITS);
      case this.isCorrectRange(numbers):
        throw Exception.error(RANGE);
      case this.isUnique(numbers):
        throw Exception.error(UNIQUE);
    }
  }

  isCorrectNumberOfDigits(numbers) {
    if (numbers.length === LOTTO.NUMBER_OF_DIGITS) {
      return true;
    }

    return false;
  }

  isCorrectRange(numbers) {
    for (const number of numbers) {
      if (LOTTO.START_NUMBER <= number <= LOTTO.END_NUMBER) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }

  isUnique(numbers) {
    const numberSet = new Set(numbers);

    if (numberSet.size === LOTTO.NUMBER_OF_DIGITS) {
      return true;
    }

    return false;
  }
}

module.exports = Lotto;
