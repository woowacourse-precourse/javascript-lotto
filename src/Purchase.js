const ThrowError = require('./components/ThrowError');
const { AMOUNt_ERROR } = require('./constant');

class Pu {
  #money;

  constructor(money) {
    this.#money = money;
    this.showValidateResult(this.#money);
  }

  showValidateResult(purchaseAmount) {
    const resultMessage = this.validate(purchaseAmount);
    return resultMessage ? ThrowError(AMOUNt_ERROR[resultMessage]) : true;
  }

  validate(purchaseAmount) {
    return this.moneyValidation(purchaseAmount) || this.unitValidation(purchaseAmount);
  }

  moneyValidation(purchaseAmount) {
    return /^\d+$/.test(purchaseAmount) === false ? 'AMOUNT' : false;
  }

  unitValidation(purchaseAmount) {
    return Number(purchaseAmount) % 1000 ? 'UNIT' : false;
  }
}

module.exports = Pu;
