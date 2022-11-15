const { Console } = require('@woowacourse/mission-utils');
const { isValidateNumber, isAmountUnitOf1000, isZeroNumber } = require('../utils/validation.js');

class InputMoneyView {
  isValidatePurchaseAmount(purchaseAmount) {
    isValidateNumber(purchaseAmount);
    isAmountUnitOf1000(purchaseAmount);
    isZeroNumber(purchaseAmount);

    return purchaseAmount;
  }

  inputMoney(buyLotto) {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      buyLotto(this.isValidatePurchaseAmount(purchaseAmount));
    });
  }
}

module.exports = InputMoneyView;
