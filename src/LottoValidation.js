const { ERROR_MESSAGE } = require('./Constants');

class LottoValidation {
  static checkLottoRange(numbers) {
    numbers.forEach((number) => LottoValidation.checkNumberRange(number));
  }

  static checkNumberRange(number) {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!regExp.test(number)) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }

  static checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.length);
    }
  }

  static checkDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
  }

  static checkBonusNumberDuplicate(number, winningNumbers) {
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.bonusDuplicate);
    }
  }

  static checkInputIsNumber(input) {
    const regExp = /^[0-9]*$/g;
    if (!regExp.test(input)) {
      throw new Error(ERROR_MESSAGE.number);
    }
  }

  static checkInputIsZero(input) {
    if (input === '0') {
      throw new Error(ERROR_MESSAGE.zero);
    }
  }

  static checkInputDivisible(input, divisor) {
    if (Number(input) % divisor !== 0) {
      throw new Error(ERROR_MESSAGE.divisible);
    }
  }
}

module.exports = LottoValidation;
