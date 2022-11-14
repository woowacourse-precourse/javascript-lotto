const { Console } = require('@woowacourse/mission-utils');
const { isMultipleOf1000, divide1000 } = require('./lib/utilFns.js');

class VendingMachine {
  #purchaseAmount;
  #purchaseNumber;

  askPurchaseAmount() {
    const validate = this.validate.bind(this);
    Console.readLine('구입금액을 입력해 주세요.\n', validate);
  }

  validate(purchaseAmount) {
    if (!isMultipleOf1000(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
    }

    return true;
  }
}

module.exports = VendingMachine;
