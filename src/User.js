const { Console } = require("@woowacourse/mission-utils");

const { isDivisible } = require("./utils/utils");
const { ERROR } = require("./utils/constants");

class User {
  purchaseAmount;
  lottos;
  constructor() {
    this.purchaseAmount;
    this.lottos;
  }

  // app으로부터 유효한 입력값 받으면 divisible 검사 후 필드 할당
  set setPurchaseAmount(amount) {
    if (!isDivisible(amount)) {
      throw new Error(ERROR.INDIVISIBLE);
    }
    this.purchaseAmount = amount;
  }
}

module.exports = User;
