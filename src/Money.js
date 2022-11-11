class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    this.checkNumber(money);
  }

  checkNumber(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 구매 금액은 숫자여야 합니다.");
    }
  }
}

module.exports = Money;
