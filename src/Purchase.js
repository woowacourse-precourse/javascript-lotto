const { Random } = require('@woowacourse/mission-utils');
const ThrowError = require('./components/ThrowError');
const { AMOUNt_ERROR } = require('./constant');

class PurChase {
  #money;

  constructor(money) {
    this.#money = money;
  }

  showLottoTickets() {
    const ticketsCount = this.validateResult(this.#money);
    const ticketsLsit = Array.from({ length: ticketsCount }, () => this.generatLottoTickets());
    return ticketsLsit;
  }

  generatLottoTickets() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  validateResult(purchaseAmount) {
    const resultMessage = this.validate(purchaseAmount);
    return resultMessage ? ThrowError(AMOUNt_ERROR[resultMessage]) : Number(purchaseAmount) / 1000;
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

module.exports = PurChase;
