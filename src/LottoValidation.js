const { ERROR_MESSAGE } = require("./constants");

class LottoValidation {
  static checkIsNumber(input) {
    const regExp = /^[0-9]*$/g;
    if (!regExp.test(input)) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }
  }
  static isUnit(numbers, divisor) {
    if (Number(numbers) % divisor !== 0) {
      throw new Error(ERROR_MESSAGE.UNIT);
    }
  }
  static checkZero(input) {
    if (input === "0") {
      throw new Error(ERROR_MESSAGE.ZERO);
    }
  }
  static checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
  }
  static checkLottoRange(numbers) {
    numbers.forEach((number) => LottoValidation.checkNumberRange(number));
  }

  static checkNumberRange(number) {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!regExp.test(number)) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
  }
  static checkDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }
  static checkBonusDuplicate(number, winningNumbers) {
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.BONUS_DUPLICATE);
    }
  }
}
module.exports = LottoValidation;
