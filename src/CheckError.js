const { LOTTO_PRICE } = require("./constants/gameCondition.js");
const { ERROR_MESSAGE } = require("./constants/messages.js");

class CheckError {
  static checkPurchaseAmount(purchaseAmount) {
    // 구입 금액 검증하는 함수
    if (!isNaN(purchaseAmount)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    else if (purchaseAmount % LOTTO_PRICE !== 0)
      throw new Error(ERROR_MESSAGE.CANT_DIVIDE);
    else if (purchaseAmount < 1000) throw new Error(UNDER_BASIC_PRICE);
  }
}

module.exports = CheckError;
