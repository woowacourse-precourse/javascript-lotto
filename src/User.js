const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const ERROR_MESSAGE = {
  NOT_A_NUMBER: '[ERROR] 구매 금액은 숫자여야 합니다.',
  LESS_THAN_1000: '[ERROR] 최소 1개 이상의 로또를 구매해야 합니다.',
  NOT_MULTIPLE_OF_1000: '[ERROR] 구매 금액은 1000원 단위여야 합니다.',
};

class User {
  handlePurchaseAmount(purchaseAmount) {
    this.checkPurchaseAmount(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
    this.purchaseQuantity = purchaseAmount / 1000;
    this.purchaseLottos();
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

  purchaseLottos() {
    Console.print(`\n${this.purchaseQuantity}개를 구매했습니다.`);
    this.purchasedLottos = [...Array(this.purchaseQuantity)].map(
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)),
    );
  }
}

exports.User = User;
exports.ERROR_MESSAGE = ERROR_MESSAGE;
