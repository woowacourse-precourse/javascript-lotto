const LOTTO = require('./consts/Lotto');

class Exception {
  static INTEGER = '금액은 정수여야 합니다.';
  static UNIT = `금액은 ${LOTTO.PRICE}원 단위여야 합니다.`;

  static error(message) {
    return `[ERROR] ${message}`;
  }
}

module.exports = Exception;
