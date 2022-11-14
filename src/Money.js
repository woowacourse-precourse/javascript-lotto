class Money {
  #money;

  constructor(moneys) {
    this.#money = moneys;
    this.validate(moneys);
  }

  validate(money) {
    if (parseInt(money) % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000원으로 나누어져야 합니다.");
    }
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Money;
