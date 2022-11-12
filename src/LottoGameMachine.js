const { Console } = require('@woowacourse/mission-utils');
const ERROR = require('./constants/error');
const MESSAGE = require('./constants/message');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
  }

  setTotalPurchaseAmount() {
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (answer) => {
      if (answer % 1000) throw new Error(ERROR.TOTAL_PURCHASE_AMOUNT);
      this.totalPurchaseAmount = answer;
    });
  }
}

module.exports = LottoGameMachine;
