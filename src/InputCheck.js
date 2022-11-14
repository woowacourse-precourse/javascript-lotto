const { LOTTO_TICKET, ERROR_MESSAGE } = require('./constant');

class InputCheck {
  moneyValidate(money) {
    if (money % LOTTO_TICKET.ONE_PRICE !== 0 || money === 0) {
      throw new Error(ERROR_MESSAGE.INPUT_ONE_THOUSAND_WON_UNIT);
    }
  }
}

const INPUTCHECK = new InputCheck();

module.exports = INPUTCHECK;
