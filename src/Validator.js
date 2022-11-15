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

  static isUniqueArray(array) {
    const set = new Set(array);

    return set.size === array.length;
  }

  static isRightLottoNumbers(target) {
    const lottoNumbers = target.split(",").map((v) => +v);

    if (
      lottoNumbers.some(
        (lottoNumber) =>
          !this.isRange(1, 45, lottoNumber) ||
          !this.isPositiveNumber(lottoNumber)
      )
    ) {
      return false;
    }

    return (
      this.isUniqueArray(lottoNumbers) &&
      this.isLottoLength(lottoNumbers.length)
    );
  }
}

module.exports = Validator;
