const { LOTTO_PURCHASE, LOTTO_NUMBER } = require('../constant/Lotto');
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
  }

  #checkValidation(value) {
    new Validation(value)
      .getStringValidator()
      .isNumber()
      .isNumberDivided(LOTTO_PURCHASE.UNIT)
      .isNumberBigger(LOTTO_PURCHASE.MIMIMUM)
      .getMessages();
  }
}

module.exports = Purchase;
