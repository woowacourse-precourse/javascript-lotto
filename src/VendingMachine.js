const { Console } = require('@woowacourse/mission-utils');
const { isMultipleOf1000, divide1000 } = require('./lib/utilFns.js');

class VendingMachine {
  #purchaseAmount;
  #numberOfLottos;

  askPurchaseAmount() {
    const answerCbFn = (answer) => {
      this.validate(answer);
      this.setPurchaseOptions(answer);
    };

    Console.readLine('구입금액을 입력해 주세요.\n', answerCbFn);
  }

  validate(purchaseAmount) {
    if (!isMultipleOf1000(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
    }

    return true;
  }

  setPurchaseOptions(purchaseAmount) {
    const puchaseAmount = purchaseAmount.trim();
    const numberOfLottos = divide1000(purchaseAmount);

    this.#purchaseAmount = puchaseAmount;
    this.#numberOfLottos = numberOfLottos;
  }
}

module.exports = VendingMachine;
