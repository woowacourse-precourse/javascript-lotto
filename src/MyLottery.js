const { Random } = require("@woowacourse/mission-utils");

class MyLottery {
  #money;

  constructor(money) {
    this.validatePurchaseAmount(money);
    this.#money = money;
  }

  validatePurchaseAmount(money) {
    if (money < 1000)
      throw new Error("[ERROR] 구매금액은 1000원 이상이어야 합니다.");
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 1000원으로 나누어 떨어져야 합니다.");
  }
}

module.exports = MyLottery;
