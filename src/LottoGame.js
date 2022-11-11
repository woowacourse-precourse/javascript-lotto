const { Console } = require('@woowacourse/mission-utils');
const { PURCHASE } = require('./constants');
const { validate, isPurchaseInput } = require('./Validator');

class LottoGame {
  #purchaseAmout = 0;

  start() {
    Console.readLine(PURCHASE.INPUT, answer => {
      validate(answer, isPurchaseInput);

      this.#purchaseAmout = answer;
    });
  }
}

module.exports = LottoGame;
