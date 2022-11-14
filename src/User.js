const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');
const Validator = require('./Validator');

class User {
  constructor() {}

  inputTotalPurchaseAmount(callback) {
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (answer) => {
      const totalPurchaseAmount = Number(answer);
      Validator.validateTotalPurchaseAmount(totalPurchaseAmount);

      return callback(totalPurchaseAmount);
    });

    return this;
  }
}

module.exports = User;
