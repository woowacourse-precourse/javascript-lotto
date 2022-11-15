class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    this.checkNumber(money);
    this.checktUnit(money);
  }

  checkNumber(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 구입 금액은 숫자로 입력해야 합니다.");
    }
  }

  checktUnit(money) {
    const UNIT = 1000;
    if (money % UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
  }
}

module.exports = Money;
