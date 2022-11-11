const util = require('./util/util');

class Vaildator {
  static isRangeIn(start, end, target) {
    return start <= target && target <= end;
  }

  static isLottoLength(target) {
    return target === util.LOTTO_MAX_LENGTH;
  }
}
