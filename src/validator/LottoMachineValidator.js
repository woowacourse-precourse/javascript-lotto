const { ERROR_MESSAGE } = require("../constants");

class LottoMachineValidator {
  validateMoney(purchaseMoney) {
    if(Number(purchaseMoney) < 1000) {
      throw ERROR_MESSAGE.PURCHASE_MONEY_ERROR;
    }
  }

  validateIsNaN(purchaseMoney) {
    if(isNaN(Number(purchaseMoney))) {
      throw ERROR_MESSAGE.PURCHASE_IS_NAN_ERROR;
    }
  }
}

module.exports = LottoMachineValidator;