const { Console } = require('@woowacourse/mission-utils');
const { isValidateNumber, isAmountUnitOfLottoPrice, isZeroNumber } = require('../utils/validation.js');
const { INFORMATION_MESSAGE } = require('../constants/index.js');

class InputMoneyView {
  isValidatePurchaseAmount(purchaseAmount) {
    isValidateNumber(purchaseAmount);
    isAmountUnitOfLottoPrice(purchaseAmount);
    isZeroNumber(purchaseAmount);

    return purchaseAmount;
  }

  inputMoney(buyLotto) {
    Console.readLine(INFORMATION_MESSAGE.INPUT_PURCHASE_PRICE, (purchaseAmount) => {
      buyLotto(this.isValidatePurchaseAmount(purchaseAmount));
    });
  }
}

module.exports = InputMoneyView;
