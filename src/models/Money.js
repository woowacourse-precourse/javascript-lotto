class Money {
  #money;

  constructor(money) {
    this.validMoney(money);
    this.#money = parseInt(money);
  }

  get money() {
    return this.#money;
  }

  validMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위 입니다.');
    }
  }
}

module.exports = Money;
