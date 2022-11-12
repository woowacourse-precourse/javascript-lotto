const { checkInputIsNumber, checkInputIsZero, checkInputDivisible } = require('./LottoValidation');

class Payment {
  #money;

  constructor(money) {
    Payment.validate(money);
    this.#money = money;
  }

  static validate(money) {
    checkInputIsNumber(money);
    checkInputIsZero(money);
    checkInputDivisible(money, 1000);
  }

  getMoney() {
    return Number(this.#money);
  }
}

module.exports = Payment;
