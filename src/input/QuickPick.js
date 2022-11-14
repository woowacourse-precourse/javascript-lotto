const { ERROR_MESSAGES } = require("../utils/Constants");

class QuickPick {
  #amount;
  #myLottoArray;

  constructor(payment) {
    this.validate(payment);
    this.countAmount(payment);
    this.pickRandomNumbers();
  }

  validate(payment) {
    if (!Number(payment)) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_TYPE);
    }

    if (payment % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    }

    if (payment < 1000) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_MIN);
    }
  }

  countAmount(payment) {
    this.#amount = payment / LOTTO_INFO.LOTTO_PRICE;
  }
}

module.exports = QuickPick;
