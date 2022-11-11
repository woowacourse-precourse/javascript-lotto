const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLE_MESSAGE, PARAMETERS } = require('./utils/constants');

class LottoGame {
  constructor() {
    this.purchaseCount = 0;
  }

  start() {}

  getPurchaseAmount() {
    MissionUtils.Console.readLine(`${CONSOLE_MESSAGE.purchaseAmount}`, (input) => {
      this.purchaseCount = input / PARAMETERS.purchaseAmountUnit;
    });
  }
}
