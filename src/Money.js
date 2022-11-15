const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;
class Money {
  #money;

  constructor(moneys) {
    this.#money = moneys;
    this.validate(moneys);
  }

  validate(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 금액은 정수여야 합니다.");
    }
    if (money < 1000) {
      throw new Error("[ERROR] 금액은 최소 1000원 이상이어야만 합니다.");
    }
    if (parseInt(money) % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000원으로 나누어져야 합니다.");
    }
    if (money < 0) {
      throw new Error("[ERROR] 금액은 음수가 되면 안됩니다.");
    }
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Money;
