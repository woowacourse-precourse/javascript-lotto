const config = require("./util/config");

class Validator {
  static isRange(start, end, target) {
    return start <= target && target <= end;
  }

  static isLottoLength(target) {
    return target === config.LOTTO_MAX_LENGTH;
  }

  static isPositiveNumber(target) {
    if (isNaN(target)) {
      return false;
    }
    return Number.isInteger(+target) && +target > 0;
  }

  static isRightFee(fee) {
    return fee % config.FEE_PER_GAME === 0;
  }

  static isNumberInArray(array, number) {
    return array.includes(number);
  }
}

module.exports = Validator;
