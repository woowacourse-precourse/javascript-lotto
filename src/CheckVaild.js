const { ERROR_MESSAGES } = require('./common/message');

class CheckVaild {
  static isValidMoney(money) {
    if (Number.isNaN(money)) {
      throw new Error(`${ERROR_MESSAGES.NOT_A_NUMBER}`);
    }
    if (money < 0) {
      throw new Error(`${ERROR_MESSAGES.NEGATIVE_NUMBER}`);
    }
    if (money % 1000 !== 0) {
      throw new Error(`${ERROR_MESSAGES.NO_REST_MONEY}`);
    }
    if (money > 1000000) {
      throw new Error(`${ERROR_MESSAGES.OVER_THE_MAX} 입력금액: ${money}`);
    }
    if (money < 1000) {
      throw new Error(`${ERROR_MESSAGES.UNDER_THE_MIN} 입력금액: ${money}`);
    }
  }
  static isVaildWinningNumber(winningNumber) {}
}

module.exports = CheckVaild;
