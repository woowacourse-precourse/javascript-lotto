class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    this.checkNumber(money);
    this.checkUnit(money);
  }

  checkNumber(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 구매 금액은 숫자여야 합니다.");
    }
  }

  checkUnit(money) {
    const UNIT = 1000;
    if (parseInt(money, 10) % UNIT !== 0) {
      throw new Error("[ERROR] 구매 금액은 천원 단위여야 합니다.");
    }
  }
}

module.exports = Money;
