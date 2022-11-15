const { LOTTO_ERROR } = require("../Constant");

class LottoValidation {
  static hasSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LENGTH_OF_SIX);
    }
  }
  static isNotNumber(numbers) {
    numbers.map((number) => {
      if (isNaN(number)) {
        throw new Error(LOTTO_ERROR.NOT_A_NUMBER);
      }
    });
  }
  static isBonusNotNumber(number) {
    if (isNaN(number)) {
      throw new LOTTO_ERROR(LOTTO_ERROR.BONUS_NOT_A_NUMBER);
    }
  }
  static checkRange(numbers) {
    numbers.map((number) => {
      if (number < 1 || number > 45) {
        throw new Error(LOTTO_ERROR.OUT_OF_RANGE);
      }
    });
  }
  static checkBonusRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(LOTTO_ERROR.BONUS_OUT_OF_RANGE);
    }
  }
  static isUniqueNumber(numbers) {
    let lottoSet = new Set([...numbers]);
    if (lottoSet.size !== 6) {
      throw new Error(LOTTO_ERROR.NOT_UNIQUE);
    }
  }
  static isInteger(numbers) {
    numbers.map((number) => {
      number = Number(number);
      if (!Number.isInteger(number)) {
        throw new ERROError(LOTTO_ERROR.NOT_AN_INTEGER);
      }
    });
  }
  static isBonusInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(LOTTO_ERROR.BONUS_NOT_AN_INTEGER);
    }
  }
}

module.exports = LottoValidation;
