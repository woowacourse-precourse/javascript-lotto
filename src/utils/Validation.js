const {
  ERROR,
  LOTTO_NUMBERS_LENGTH,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_PRICE,
} = require('./constants');

class Validation {
  static isNumber(input) {
    if (Number.isNaN(input)) {
      throw ERROR.MUST_INPUT_ONLY_NUMBER;
    }
  }

  static hasSixLength(input) {
    if (input.length !== LOTTO_NUMBERS_LENGTH) {
      throw ERROR.MUST_HAVE_SIX_NUMBER;
    }
  }

  static beInRange(input) {
    if (input < MIN_LOTTO_NUMBER || input > MAX_LOTTO_NUMBER) {
      throw ERROR.MUST_BE_WITHIN_RANGE;
    }
  }

  static hasNoRepeatedNum(input) {
    if (input.length !== new Set(input).size) {
      throw ERROR.NOT_ALLOW_REPEATED_NUMBER;
    }
  }

  static isMoreThanLottoPrice(input) {
    if (input < LOTTO_PRICE) {
      throw ERROR.MUST_INPUT_MORE_THAN_LOTTO_PRICE;
    }
  }

  static has1000Unit(input) {
    if (input % LOTTO_PRICE !== 0) {
      throw ERROR.MUST_BE_1000_UNIT;
    }
  }

  static notIncludedInWinningNums(bonusNum, winningNums) {
    if (winningNums.includes(bonusNum)) {
      throw ERROR.MUST_NOT_BE_INCLUDED_IN_WINNING_NUMBERS;
    }
  }
}

module.exports = Validation;
