const { Console } = require('@woowacourse/mission-utils');

const ERROR_MESSAGE = {
  NOT_A_NUMBER: '[ERROR] 구매 금액은 숫자여야 합니다.',
  LESS_THAN_1000: '[ERROR] 최소 1개 이상의 로또를 구매해야 합니다.',
  NOT_MULTIPLE_OF_1000: '[ERROR] 구매 금액은 1000원 단위여야 합니다.',
};

class User {
  getPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      this.handlePurchaseAmount(Number(purchaseAmount));
    });
  }

  handlePurchaseAmount(purchaseAmount) {
    this.checkPurchaseAmount(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
    this.purchaseQuantity = purchaseAmount / 1000;
  }

  checkPurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    } else if (purchaseAmount < 1000) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_1000);
    } else if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_MULTIPLE_OF_1000);
    }
  }
}

exports.User = User;
exports.ERROR_MESSAGE = ERROR_MESSAGE;
