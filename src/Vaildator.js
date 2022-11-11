const util = require('./util/util');

class Vaildator {
  static isRangeIn(start, end, target) {
    return start <= target && target <= end;
  }

  static isLottoLength(target) {
    return target === util.LOTTO_MAX_LENGTH;
  }

  static isPositiveNumber(target) {
    if (isNaN(target)) {
      return false;
    }
    return Number.isInteger(+target) && +target > 0;
  }

  static isRightAmount(amount) {
    return amount % util.AMOUNT_PER_GAME === 0;
  }

  static isDuplicateNumberInArray(array, number) {
    return array.includes(number);
  }

  static isUniqueElementArray(array) {
    const set = new Set(array);
    return set.size === array.length;
  }

  static isRightLottoNumber(number) {
    return (
      this.isPositiveNumber(number) &&
      this.isRangeIn(util.LOTTO_RANGE_MIN, util.LOTTO_RANGE_MAX, number)
    );
  }

  static isRightLottoNumbers(target) {
    const lottoNumbers = target.split(',').map((e) => +e);
    if (!lottoNumbers.every(this.isRightLottoNumber.bind(this))) {
      return false;
    }
    return (
      this.isUniqueElementArray(lottoNumbers) &&
      this.isLottoLength(lottoNumbers.length)
    );
  }
}

module.exports = Vaildator;
