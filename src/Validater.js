const {
  LOTTO_PRICE,
  LOTTO_DIGITS,
  NUMBER_RANGE,
  LOTTO_ERROR_MESSAGE,
  MONEY_ERROR_MESSAGE,
} = require('./Constants');

class Validater {
  static checkNumberOfDigits(numbers) {
    if (numbers.length !== LOTTO_DIGITS) {
      throw new Error(LOTTO_ERROR_MESSAGE.digits);
    }
  }

  static checkInteger(numbers) {
    if (typeof numbers === 'number') {
      if (Validater.verifyNonIntger(numbers)) {
        throw new Error(LOTTO_ERROR_MESSAGE.integer);
      }
      return;
    }
    if (numbers.some(Validater.verifyNonIntger)) {
      throw new Error(LOTTO_ERROR_MESSAGE.integer);
    }
  }

  static verifyNonIntger(number) {
    if (!Number.isInteger(number)) {
      return true;
    }
    return false;
  }

  static checkRange(numbers) {
    if (typeof numbers === 'number') {
      if (Validater.verifyOutOfRange(numbers)) {
        throw new Error(LOTTO_ERROR_MESSAGE.range);
      }
      return;
    }
    if (numbers.some(Validater.verifyOutOfRange)) {
      throw new Error(LOTTO_ERROR_MESSAGE.range);
    }
  }

  static verifyOutOfRange(number) {
    if (!(number >= NUMBER_RANGE.lower && number <= NUMBER_RANGE.upper)) {
      return true;
    }
    return false;
  }

  static checkDuplication(numbers, luckyNumbers = []) {
    if (typeof numbers === 'number') {
      if (luckyNumbers.includes(numbers)) {
        throw new Error(LOTTO_ERROR_MESSAGE.duplication);
      }
      return;
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(LOTTO_ERROR_MESSAGE.duplication);
    }
  }

  static checkSingleDigit(number) {
    if (!number) {
      throw new Error(LOTTO_ERROR_MESSAGE.bonus);
    }
  }

  static validateMoney(money) {
    if (!money) {
      throw new Error(MONEY_ERROR_MESSAGE.number);
    }
    if (money % LOTTO_PRICE !== 0) {
      throw new Error(MONEY_ERROR_MESSAGE.unit);
    }
  }
}

module.exports = Validater;
