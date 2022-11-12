const { Console } = require('@woowacourse/mission-utils');

const { PHRASE, ERROR } = require('./constants');

class VendingMachine {
  askPurchaseAmount() {
    Console.readLine(PHRASE.PURCHASE_AMOUNT, (input) => {
      this.validate(input);
    });
  }

  validate(input) {
    if (isNaN(input)) throw new Error(ERROR.PURCHASE_AMOUNT_TYPE);
    if (input % 1000 !== 0 || input == 0) throw new Error(ERROR.PURCHASE_AMOUNT_UNIT);
  }
}

module.exports = VendingMachine;
