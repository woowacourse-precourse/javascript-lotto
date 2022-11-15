const { checkInputIsNumber, checkInputIsZero, checkInputDivisible } = require('./LottoValidation');
const { LOTTO_PRICE } = require('./Constants');

class Payment {
  #money;

  constructor(money) {
    Payment.validate(money);
    this.#money = money;
  }

  static validate(money) {
    checkInputIsNumber(money);
    checkInputIsZero(money);
    checkInputDivisible(money, LOTTO_PRICE);
  }

  getMoney() {
    return Number(this.#money);
  }
}

module.exports = Payment;
