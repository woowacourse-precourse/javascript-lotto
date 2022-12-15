const { LOTTO_PURCHASE, LOTTO_NUMBER } = require('../constant/LottoNumbers');
const Validation = require('./Validation');
const { UTIL } = require('../constant/Libs');
const { Random } = require(UTIL);

class Purchase {
  #amount;

  constructor(amount) {
    this.#amount = amount;
    this.#checkValidation(this.#amount);
  }

  purchaseLotto() {
    const countTickets = this.#amount / LOTTO_PURCHASE.UNIT;
    return Array.from({ length: countTickets }, () => this.#generateLottoTickets());
  }

  #checkValidation(value) {
    new Validation(value)
      .getStringValidator()
      .isNumber()
      .isNumberBigger(LOTTO_PURCHASE.MIMIMUM)
      .isNumberDivided(LOTTO_PURCHASE.UNIT)
      .getMessages();
  }

  #generateLottoTickets() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.START_RANGE,
      LOTTO_NUMBER.END_RANGE,
      LOTTO_NUMBER.LENGTH
    ).sort((a, b) => a - b);
  }
}

module.exports = Purchase;
