const MONEY_UNIT = 1000;

class Money {
  #money;

  constructor(money) {
    this.#money = money;
    this.validate(money);
  }

  validate(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 금액은 정수여야 합니다.");
    }
    if (money < MONEY_UNIT) {
      throw new Error("[ERROR] 금액은 1000원 이상이어야 합니다.");
    }
    if (parseInt(money) % MONEY_UNIT !== 0) {
      throw new Error("[ERROR] 금액은 1000원으로 나누어져야 합니다.");
    }
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Money;
