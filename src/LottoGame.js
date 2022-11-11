const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const { CONSOLE_MESSAGE, PARAMETERS } = require('./utils/constants');

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
    });
  }
}
