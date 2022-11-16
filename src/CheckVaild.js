const { ERROR_MESSAGES } = require('./common/message');
const { LOTTO_INFO } = require('./common/constants');
class CheckVaild {
  static isValidMoney(money) {
    if (Number.isNaN(money)) {
      throw new Error(`${ERROR_MESSAGES.NOT_A_NUMBER}`);
    }
    if (money < 0) {
      throw new Error(`${ERROR_MESSAGES.NEGATIVE_NUMBER}`);
    }
    if (money % LOTTO_INFO.PRICE !== 0) {
      throw new Error(`${ERROR_MESSAGES.NO_REST_MONEY}`);
    }
    if (money > 1000000) {
      throw new Error(`${ERROR_MESSAGES.OVER_THE_MAX} 입력금액: ${money}`);
    }
    if (money < 1000) {
      throw new Error(`${ERROR_MESSAGES.UNDER_THE_MIN} 입력금액: ${money}`);
    }
  }
  static isVaildWinningNumber(winningNumber) {
    const tempWinningNumber = new Set(winningNumber);
    if (winningNumber.length !== 6) {
      throw new Error(`${ERROR_MESSAGES.NO_VALID_LOTTO_LENGTH}`);
    }
    if (winningNumber.length !== Array.from(tempWinningNumber).length) {
      throw new Error(`${ERROR_MESSAGES.DUPLICATE_NUMBER}`);
    }
  }
  static isVaildBounsNumber(winningNumber, bounsNumber) {
    const totalNumber = [...winningNumber, bounsNumber];
    const tempTotalNumber = new Set(totalNumber);
    if (Array.from(tempTotalNumber).length !== 7) {
      throw new Error(`${ERROR_MESSAGES.DUPLICATE_NUMBER}`);
    }
  }
}

module.exports = CheckVaild;
