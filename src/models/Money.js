class Money {
  #money;

  constructor(money) {
    this.validMoney(money);
    this.#money = money;
  }

  get money() {
    return this.#money;
  }

  validMoney(money) {
    this.validForm(money);
    this.validRange(money);
    this.validMultiple(money);
  }
  
  validForm(money) {
      const reg = /^[0-9]+$/;
      if (!reg.test(money)) {
        throw new Error('[ERROR] 구입 금액은 숫자만 입력 가능합니다.');
      }
    }

  validRange(money) {
    if (money <= 0) {
      throw new Error('[ERROR] 구입 금액은 0보다 커야 합니다.');
    }
  }

  validMultiple(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위 입니다.');
    }
  }
}

module.exports = Money;
