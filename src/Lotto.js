const { LOTTO } = require('./consts/LottoSystem');
const { ERROR } = require('./consts/Message');
const Exception = require('./Exception');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.handleLottoException(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  handleLottoException(numbers) {
    const {
      LOTTO_NUMBER: { DIGITS, INTEGER, RANGE, UNIQUE },
    } = ERROR;

    switch (false) {
      case this.isCorrectNumberOfDigits(numbers):
        throw Exception.error(DIGITS);
      case this.isAllInteger(numbers):
        throw Exception.error(INTEGER);
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

  isAllInteger(numbers) {
    for (const number of numbers) {
      if (!Number.isInteger(number)) {
        return false;
      }
    }

    return true;
  }

  isCorrectRange(numbers) {
    for (const number of numbers) {
      if (number < LOTTO.START_NUMBER || number > LOTTO.END_NUMBER) {
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
