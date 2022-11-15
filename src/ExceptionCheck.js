const Utils = require('./Utils');

class ExceptionCheck {
  constructor() {
    this.utils = new Utils();
  }
  userInputMoneyValue(moneyValue) {
    if (moneyValue % 1000 !== 0 || moneyValue === 0) {
      throw new Error('[ERROR] 구매 금액은 1,000 단위로 입력해주세요');
    }
  }
  userInputWinNumbers(winNumbers) {
    if (winNumbers.lenght !== 6) {
      throw new Error('[ERROR] 당첨 숫자는 6자리로 입력해주십시오');
    }
  }
}

module.exports = ExceptionCheck;
