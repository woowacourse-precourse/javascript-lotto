const { AMOUNt_ERROR, LOTTO_INFO, LIBRARY_URL } = require('./constant');
const { Random } = require(LIBRARY_URL);
const throwError = require('./components/throwError');

class PurChase {
  #money;

  constructor (money) {
    this.#money = money;
  }

  showLotteryTickets () {
    const ticketsCount = this.showValidationResult(this.#money);
    return Array.from({ length: ticketsCount }, () => this.generatLotteryTicket());
  }

  showValidationResult (purchaseAmount) {
    const resultMessage = this.validate(purchaseAmount);
    return resultMessage
      ? throwError(AMOUNt_ERROR[resultMessage])
      : Number(purchaseAmount) / LOTTO_INFO.PRICE;
  }

  validate (purchaseAmount) {
    return (
      this.validateMoney(purchaseAmount)
      || this.validateUnit(purchaseAmount)
      || this.validateMinimumAmount(purchaseAmount)
    );
  }

  validateMoney (purchaseAmount) {
    return /^\d+$/.test(purchaseAmount) === false ? 'AMOUNT' : false;
  }

  validateUnit (purchaseAmount) {
    return Number(purchaseAmount) % LOTTO_INFO.PRICE ? 'UNIT' : false;
  }

  validateMinimumAmount (purchaseAmount) {
    return Number(purchaseAmount) <= LOTTO_INFO.MINIMUM_AMOUNT ? 'MINIMUM' : false;
  }

  generatLotteryTicket () {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.START_RANGE,
      LOTTO_INFO.LAST_RANGE,
      LOTTO_INFO.PICK,
    ).sort((a, b) => a - b);
  }
}

module.exports = PurChase;
