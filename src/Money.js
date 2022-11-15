class Money {
  #money;

  constructor(money) {
    this.checkMoneyUnit(money);
    this.checkMinimumMoney(Money);
    this.#money = Number(money);
  }

  checkMoneyUnit(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
  }

  checkMinimumMoney(money) {
    if (money < 1000) {
      throw new Error("[ERROR] 1,000원 이상 입력해주세요.");
    }
  }
}

module.exports = Money;
