class Payment {
  #money;

  constructor(money) {
    Payment.validate(money);
    this.#money = money;
  }

  static validate(money) {
    if (parseInt(money, 10) !== Number(money)) {
      throw new Error('[ERROR] 입력값을 입력하지 않았거나 문자, 특수기호가 포함되어 있습니다.');
    }
    const regExp = /^[0-9]+/g;
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
