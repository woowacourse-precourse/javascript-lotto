class Money {
  #money;

  constructor(money) {
    this.isNumber(money);
    this.#money = money;
  }

  isNumber(money) {
    if (!Number(money)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }
}

module.exports = Money;