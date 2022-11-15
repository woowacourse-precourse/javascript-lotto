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
}

module.exports = Validator;
