const Validation = require('./Validation');
const UI = require('./UI');
const { LOTTO } = require('./Constants');

const validation = new Validation();
const ui = new UI();

class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    try {
      validation.checkPositiveInteger(money);
      validation.checkSplitIntoDivisor(money, LOTTO.PRICE);
    } catch (error) {
      ui.printError(error);
    }
  }

  getMoney() {
    return this.#money;
  }

  // 특정 단위로 돈을 나눠주는 함수
  getMoneyDivideByPrice(price) {
    return parseInt(this.#money / price, 10);
  }
}

module.exports = Money;
