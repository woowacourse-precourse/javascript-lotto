class Payment {
  #money;

  constructor(money) {
    Payment.validate(money);
    this.#money = money;
  }

  static validate(money) {
    const regExp = /^[0-9]/g;
    if (!regExp.test(money)) {
      throw new Error('[ERROR] 입력값이 숫자가 아닙니다.');
    }
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액의 단위는 1000원입니다.');
    }
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Payment;
