const { Console } = require('@woowacourse/mission-utils');
const { REGEX, ERROR } = require('./constants');

class Store {
  purchaseAmount;

  constuctor() {
    this.purchaseAmount;
  }

  pay() {
    Console.readLine('구입금액을 입력해 주세요.\n', (inputStr) => {
      this.purchaseAmount = this.validate(inputStr);
    });
  }

  validate(inputStr) {
    if (!REGEX.PURCHASE_AMOUNT_REGEX.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_PURCHASE_AMOUNT);
    }

    return parseInt(inputStr);
  }
}

module.exports = Store;
