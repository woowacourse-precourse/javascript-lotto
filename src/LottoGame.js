const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const { CONSOLE_MESSAGE, PARAMETERS, RESULT_MESSAGE } = require('./utils/constants');

class LottoGame {
  constructor() {
    this.exception = new Exception();
    this.purchaseCount = 0;
  }

  start() {}

  getPurchaseAmount() {
    MissionUtils.Console.readLine(`${CONSOLE_MESSAGE.purchaseAmount}`, (input) => {
      this.exception.validatePurchaseAmount(input);
      this.purchaseCount = input / PARAMETERS.purchaseAmountUnit;
      this.print(RESULT_MESSAGE.purchase(this.purchaseCount));
    });
  }

  print(message) {
    MissionUtils.Console.print(message);
  }
}
