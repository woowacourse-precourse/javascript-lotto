class Payment {
  #money;

  constructor(money) {
    Payment.validate(money);
    this.#money = money;
  }

  static validate(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액의 단위는 1000원입니다.');
    }
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Payment;
