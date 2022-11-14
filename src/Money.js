class Money {
  #money;

  constructor(money) {
    this.isNumber(money);
    this.isDivide(money);
    this.#money = money;
  }

  isNumber(money) {
    if (!Number(money)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  isDivide(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 1000단위로 입력해주세요.');
    }
  }
}

module.exports = Money;