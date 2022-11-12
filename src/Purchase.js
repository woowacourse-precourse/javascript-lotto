const { Random } = require('@woowacourse/mission-utils');
const ThrowError = require('./components/ThrowError');
const { AMOUNt_ERROR, LOTTO_INFO } = require('./constant');

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
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.START_RANGE,
      LOTTO_INFO.LAST_RANGE,
      LOTTO_INFO.PICK
    ).sort((a, b) => a - b);
  }

  validateResult(purchaseAmount) {
    const resultMessage = this.validate(purchaseAmount);
    return resultMessage
      ? ThrowError(AMOUNt_ERROR[resultMessage])
      : Number(purchaseAmount) / LOTTO_INFO.PRICE;
  }

  validate(purchaseAmount) {
    return this.moneyValidation(purchaseAmount) || this.unitValidation(purchaseAmount);
  }

  moneyValidation(purchaseAmount) {
    return /^\d+$/.test(purchaseAmount) === false ? 'AMOUNT' : false;
  }

  unitValidation(purchaseAmount) {
    return Number(purchaseAmount) % LOTTO_INFO.PRICE ? 'UNIT' : false;
  }
}

module.exports = PurChase;
